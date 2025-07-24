import React, { useState } from 'react';
import { testBackendConnection, testAllEndpoints, logConnectionResults, type ConnectionTestResult } from '../../utils/testConnection';

interface ConnectionTestState {
  isLoading: boolean;
  results: {[key: string]: ConnectionTestResult} | null;
  basicTest: ConnectionTestResult | null;
}

const ConnectionTest: React.FC = () => {
  const [state, setState] = useState<ConnectionTestState>({
    isLoading: false,
    results: null,
    basicTest: null
  });

  const handleBasicTest = async () => {
    setState(prev => ({ ...prev, isLoading: true, basicTest: null }));
    
    try {
      const result = await testBackendConnection();
      setState(prev => ({ ...prev, basicTest: result, isLoading: false }));
      
      console.log('🔍 PRUEBA BÁSICA DE CONECTIVIDAD:');
      console.log(result.message);
      if (result.details) console.log('Detalles:', result.details);
    } catch (error) {
      console.error('Error en la prueba básica:', error);
      setState(prev => ({ 
        ...prev, 
        basicTest: {
          success: false,
          message: '❌ Error interno en la prueba',
          details: error
        },
        isLoading: false 
      }));
    }
  };

  const handleFullTest = async () => {
    setState(prev => ({ ...prev, isLoading: true, results: null }));
    
    try {
      const results = await testAllEndpoints();
      setState(prev => ({ ...prev, results, isLoading: false }));
      
      // Log results to console
      logConnectionResults(results);
    } catch (error) {
      console.error('Error en la prueba completa:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const getStatusIcon = (success: boolean) => success ? '✅' : '❌';
  const getStatusColor = (success: boolean) => success ? '#4CAF50' : '#F44336';

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'white',
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      minWidth: '300px',
      maxWidth: '500px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      fontFamily: 'monospace',
      fontSize: '12px'
    }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>
        🔧 Diagnóstico de Conectividad
      </h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Backend URL:</strong>
        <div style={{ 
          background: '#f5f5f5', 
          padding: '5px', 
          borderRadius: '4px',
          wordBreak: 'break-all'
        }}>
          {import.meta.env.VITE_API_URL || 'No configurada'}
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={handleBasicTest}
          disabled={state.isLoading}
          style={{
            background: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: state.isLoading ? 'not-allowed' : 'pointer',
            marginRight: '10px'
          }}
        >
          {state.isLoading ? 'Probando...' : 'Prueba Básica'}
        </button>
        
        <button 
          onClick={handleFullTest}
          disabled={state.isLoading}
          style={{
            background: '#FF9800',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: state.isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {state.isLoading ? 'Probando...' : 'Prueba Completa'}
        </button>
      </div>

      {state.basicTest && (
        <div style={{ 
          marginBottom: '15px', 
          padding: '10px', 
          background: state.basicTest.success ? '#E8F5E8' : '#FFEBEE',
          borderRadius: '4px',
          border: `1px solid ${getStatusColor(state.basicTest.success)}`
        }}>
          <div style={{ color: getStatusColor(state.basicTest.success), fontWeight: 'bold' }}>
            {state.basicTest.message}
          </div>
          {state.basicTest.responseTime && (
            <div style={{ fontSize: '11px', color: '#666', marginTop: '5px' }}>
              Tiempo de respuesta: {state.basicTest.responseTime}ms
            </div>
          )}
        </div>
      )}

      {state.results && (
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Resultados detallados:</h4>
          {Object.entries(state.results).map(([name, result]) => (
            <div 
              key={name}
              style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: result.success ? '#E8F5E8' : '#FFEBEE',
                borderRadius: '4px',
                border: `1px solid ${getStatusColor(result.success)}`
              }}
            >
              <div style={{ 
                color: getStatusColor(result.success), 
                fontWeight: 'bold',
                fontSize: '11px'
              }}>
                {getStatusIcon(result.success)} {name}
              </div>
              <div style={{ fontSize: '10px', color: '#666', marginTop: '2px' }}>
                {result.message}
              </div>
              {result.responseTime && (
                <div style={{ fontSize: '10px', color: '#888' }}>
                  {result.responseTime}ms
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        background: '#f0f0f0', 
        borderRadius: '4px',
        fontSize: '10px',
        color: '#666'
      }}>
        💡 <strong>Tip:</strong> Abre las herramientas de desarrollador (F12) y ve a la consola para ver más detalles.
      </div>
    </div>
  );
};

export default ConnectionTest;