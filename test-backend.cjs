#!/usr/bin/env node

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuración
const BACKEND_URL = process.env.VITE_API_URL || 'http://localhost:8080/api';
const TIMEOUT = 5000; // 5 segundos

console.log('🔍 Probando conectividad con el backend...');
console.log(`📍 URL del backend: ${BACKEND_URL}`);
console.log('=' .repeat(50));

// Función para hacer peticiones HTTP
function makeRequest(url, timeout = TIMEOUT) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      timeout: timeout,
      headers: {
        'User-Agent': 'SkillLink-Frontend-Test/1.0',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    const startTime = Date.now();
    
    const req = client.request(options, (res) => {
      const responseTime = Date.now() - startTime;
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          success: res.statusCode >= 200 && res.statusCode < 400,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          data: data,
          responseTime: responseTime,
          headers: res.headers
        });
      });
    });

    req.on('error', (error) => {
      const responseTime = Date.now() - startTime;
      reject({
        success: false,
        error: error.message,
        code: error.code,
        responseTime: responseTime
      });
    });

    req.on('timeout', () => {
      req.destroy();
      const responseTime = Date.now() - startTime;
      reject({
        success: false,
        error: 'Request timeout',
        code: 'TIMEOUT',
        responseTime: responseTime
      });
    });

    req.end();
  });
}

// Función para probar un endpoint
async function testEndpoint(name, path) {
  const url = `${BACKEND_URL}${path}`;
  console.log(`\n🔎 Probando: ${name}`);
  console.log(`   URL: ${url}`);
  
  try {
    const result = await makeRequest(url);
    
    if (result.success) {
      console.log(`   ✅ Estado: ${result.statusCode} ${result.statusMessage}`);
      console.log(`   ⏱️  Tiempo: ${result.responseTime}ms`);
      
      // Intenta parsear el JSON si es posible
      try {
        const jsonData = JSON.parse(result.data);
        console.log(`   📦 Datos: ${JSON.stringify(jsonData).substring(0, 100)}${result.data.length > 100 ? '...' : ''}`);
      } catch (e) {
        console.log(`   📄 Respuesta: ${result.data.substring(0, 100)}${result.data.length > 100 ? '...' : ''}`);
      }
    } else {
      console.log(`   ⚠️  Estado: ${result.statusCode} ${result.statusMessage}`);
      console.log(`   ⏱️  Tiempo: ${result.responseTime}ms`);
      console.log(`   📄 Error: ${result.data}`);
    }
    
    return result.success;
  } catch (error) {
    console.log(`   ❌ Error: ${error.error}`);
    console.log(`   🔧 Código: ${error.code}`);
    console.log(`   ⏱️  Tiempo: ${error.responseTime}ms`);
    
    if (error.code === 'ECONNREFUSED') {
      console.log(`   💡 Posible causa: El backend no está ejecutándose en ${BACKEND_URL}`);
    } else if (error.code === 'ENOTFOUND') {
      console.log(`   💡 Posible causa: No se puede resolver la dirección ${BACKEND_URL}`);
    } else if (error.code === 'TIMEOUT') {
      console.log(`   💡 Posible causa: El backend está tomando demasiado tiempo para responder`);
    }
    
    return false;
  }
}

// Función principal
async function main() {
  const endpoints = [
    { name: 'Health Check', path: '/health' },
    { name: 'API Root', path: '/' },
    { name: 'Users Endpoint', path: '/users' },
    { name: 'Projects Endpoint', path: '/projects' },
    { name: 'Challenges Endpoint', path: '/challenges' },
    { name: 'Forum Endpoint', path: '/forum' },
  ];

  let successCount = 0;
  const totalTests = endpoints.length;

  for (const endpoint of endpoints) {
    const success = await testEndpoint(endpoint.name, endpoint.path);
    if (success) successCount++;
  }

  console.log('\n' + '=' .repeat(50));
  console.log('📊 RESUMEN DE RESULTADOS:');
  console.log(`   ✅ Exitosos: ${successCount}/${totalTests}`);
  console.log(`   ❌ Fallidos: ${totalTests - successCount}/${totalTests}`);
  
  if (successCount === 0) {
    console.log('\n🚨 RECOMENDACIONES:');
    console.log('   1. Verifica que tu backend esté ejecutándose');
    console.log('   2. Confirma que la URL del backend sea correcta');
    console.log('   3. Revisa que no haya firewall bloqueando la conexión');
    console.log('   4. Comprueba que el puerto esté abierto y accesible');
  } else if (successCount < totalTests) {
    console.log('\n⚠️  CONECTIVIDAD PARCIAL:');
    console.log('   • Algunos endpoints funcionan, otros no');
    console.log('   • Verifica la configuración de rutas en tu backend');
    console.log('   • Algunos endpoints podrían requerir autenticación');
  } else {
    console.log('\n🎉 ¡CONECTIVIDAD EXITOSA!');
    console.log('   • Tu frontend puede comunicarse con el backend');
    console.log('   • Todos los endpoints principales están respondiendo');
  }

  console.log('\n💡 Para usar en tu frontend, asegúrate de tener:');
  console.log(`   • VITE_API_URL=${BACKEND_URL} en tu archivo .env`);
  console.log('   • El backend ejecutándose y accesible');
  console.log('   • CORS configurado correctamente en el backend');
}

// Ejecutar el script
main().catch(console.error);
