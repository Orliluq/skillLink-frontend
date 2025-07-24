import apiClient from '../services/api';

export interface ConnectionTestResult {
  success: boolean;
  message: string;
  details?: any;
  responseTime?: number;
}

export const testBackendConnection = async (): Promise<ConnectionTestResult> => {
  const startTime = Date.now();
  
  try {
    console.log('🔍 Probando conexión con el backend...');
    console.log('URL del backend:', import.meta.env.VITE_API_URL);
    
    // Prueba simple de conectividad - endpoint de health check
    const response = await apiClient.get('/health', {
      timeout: 5000 // 5 segundos de timeout
    });
    
    const responseTime = Date.now() - startTime;
    
    return {
      success: true,
      message: `✅ Conexión exitosa con el backend (${responseTime}ms)`,
      details: response.data,
      responseTime
    };
    
  } catch (error: any) {
    const responseTime = Date.now() - startTime;
    
    if (error.code === 'ECONNREFUSED') {
      return {
        success: false,
        message: '❌ Error: El backend no está ejecutándose o no es accesible',
        details: `No se pudo conectar a ${import.meta.env.VITE_API_URL}`,
        responseTime
      };
    }
    
    if (error.code === 'TIMEOUT' || error.message.includes('timeout')) {
      return {
        success: false,
        message: '⏱️ Error: Timeout - El backend no responde',
        details: `Timeout después de ${responseTime}ms`,
        responseTime
      };
    }
    
    if (error.response) {
      // El servidor respondió con un estado de error
      return {
        success: false,
        message: `⚠️ Backend responde pero con error: ${error.response.status}`,
        details: {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data
        },
        responseTime
      };
    }
    
    return {
      success: false,
      message: '❌ Error desconocido de conexión',
      details: error.message || error,
      responseTime
    };
  }
};

export const testAllEndpoints = async (): Promise<{[key: string]: ConnectionTestResult}> => {
  const endpoints = [
    { name: 'Health Check', path: '/health' },
    { name: 'Auth Login', path: '/auth/login', method: 'POST', skipTest: true },
    { name: 'Users', path: '/users' },
    { name: 'Projects', path: '/projects' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Forum', path: '/forum' },
  ];
  
  const results: {[key: string]: ConnectionTestResult} = {};
  
  for (const endpoint of endpoints) {
    if (endpoint.skipTest) {
      results[endpoint.name] = {
        success: true,
        message: '⏭️ Endpoint omitido (requiere datos)',
        details: `Endpoint: ${endpoint.path}`
      };
      continue;
    }
    
    try {
      const startTime = Date.now();
      const response = await apiClient.get(endpoint.path, { timeout: 3000 });
      const responseTime = Date.now() - startTime;
      
      results[endpoint.name] = {
        success: true,
        message: `✅ ${endpoint.name} - OK (${responseTime}ms)`,
        details: {
          status: response.status,
          dataLength: JSON.stringify(response.data).length
        },
        responseTime
      };
    } catch (error: any) {
      const responseTime = Date.now() - Date.now();
      
      results[endpoint.name] = {
        success: false,
        message: `❌ ${endpoint.name} - Error`,
        details: error.response ? {
          status: error.response.status,
          statusText: error.response.statusText,
          message: error.response.data?.message || error.message
        } : error.message,
        responseTime
      };
    }
  }
  
  return results;
};

export const logConnectionResults = (results: {[key: string]: ConnectionTestResult}) => {
  console.log('\n📊 RESULTADOS DE CONECTIVIDAD:');
  console.log('=' .repeat(50));
  
  Object.entries(results).forEach(([/* name */, result]) => {
    console.log(`${result.message}`);
    if (result.details) {
      console.log(`   Detalles:`, result.details);
    }
    if (result.responseTime !== undefined) {
      console.log(`   Tiempo de respuesta: ${result.responseTime}ms`);
    }
    console.log('');
  });
};
