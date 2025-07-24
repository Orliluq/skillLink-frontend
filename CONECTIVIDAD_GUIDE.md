# 🔧 Guía de Verificación de Conectividad Frontend-Backend

## 📋 Resumen del Estado Actual

**Estado:** ❌ **Backend no ejecutándose**
**Fecha de verificación:** $(Get-Date)

### 🔍 Resultados de la Prueba:
- ❌ **Health Check** - ECONNREFUSED
- ❌ **API Root** - ECONNREFUSED  
- ❌ **Users Endpoint** - ECONNREFUSED
- ❌ **Projects Endpoint** - ECONNREFUSED
- ❌ **Challenges Endpoint** - ECONNREFUSED
- ❌ **Forum Endpoint** - ECONNREFUSED

---

## 🚀 Pasos para Solucionar

### 1. **Verificar que el Backend esté Ejecutándose**

**Opción A: Si tienes el backend en otra carpeta**
```bash
# Navega a la carpeta del backend
cd "C:\Users\MI NENE PECHIOCHA\Documents\SkillLink Project\skilllink-backend"

# Ejecuta el backend (Spring Boot)
./mvnw spring-boot:run
# O si usas Gradle:
./gradlew bootRun
# O si tienes el JAR compilado:
java -jar target/skilllink-backend-0.0.1-SNAPSHOT.jar
```

**Opción B: Si usas Docker**
```bash
docker-compose up backend
# O solo el contenedor del backend:
docker run -p 8080:8080 skilllink-backend
```

### 2. **Verificar la URL del Backend**

Asegúrate de que tu archivo `.env` tenga la configuración correcta:

```env
# URL del backend API
VITE_API_URL=http://localhost:8080/api

# Si tu backend usa otro puerto o path:
# VITE_API_URL=http://localhost:3000/api
# VITE_API_URL=http://localhost:8080
```

### 3. **Probar la Conectividad**

Una vez que el backend esté ejecutándose, usa estos comandos:

```bash
# Prueba rápida de conectividad
npm run test-backend

# O directamente:
node test-backend.cjs

# Para ejecutar el frontend después de verificar conectividad:
npm run dev-with-test
```

### 4. **Verificación Manual con Navegador**

Una vez que el backend esté ejecutándose, verifica manualmente:

- **Health Check:** http://localhost:8080/api/health
- **API Root:** http://localhost:8080/api/
- **Swagger UI (si está habilitado):** http://localhost:8080/swagger-ui.html

---

## 🛠️ Herramientas de Diagnóstico Creadas

### 1. **Script de Prueba de Conectividad** (`test-backend.cjs`)
```bash
npm run test-backend
```

### 2. **Componente de Diagnóstico React** (`src/components/diagnostics/ConnectionTest.tsx`)
Para usar temporalmente en tu aplicación:

```typescript
import ConnectionTest from './components/diagnostics/ConnectionTest';

// Agregar temporalmente a tu App.tsx:
function App() {
  return (
    <div>
      {/* Tu aplicación */}
      <ConnectionTest /> {/* Solo para desarrollo */}
    </div>
  );
}
```

### 3. **Utilidades de Prueba** (`src/utils/testConnection.ts`)
Para usar programáticamente en tu código:

```typescript
import { testBackendConnection } from './utils/testConnection';

const checkConnection = async () => {
  const result = await testBackendConnection();
  console.log(result.message);
};
```

---

## 🔧 Configuración de CORS en el Backend

Si tu backend está ejecutándose pero hay errores de CORS, asegúrate de tener esta configuración:

```java
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

O usando `@CrossOrigin` en tus controladores:

```java
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class ApiController {
    // Tu código aquí
}
```

---

## 📊 Interpretación de Resultados

### ✅ **Conexión Exitosa**
```
✅ Estado: 200 OK
⏱️  Tiempo: 45ms
📦 Datos: {"status":"healthy","timestamp":"2024-..."}
```

### ❌ **Backend No Ejecutándose**
```
❌ Error: connect ECONNREFUSED ::1:8080
🔧 Código: ECONNREFUSED
💡 Posible causa: El backend no está ejecutándose
```

### ⚠️ **Problema de CORS**
```
❌ Error: CORS policy: No 'Access-Control-Allow-Origin' header
💡 Posible causa: Configuración de CORS incorrecta
```

### ⏱️ **Timeout**
```
❌ Error: Request timeout
🔧 Código: TIMEOUT
💡 Posible causa: Backend muy lento o sobrecargado
```

---

## 🎯 Próximos Pasos Recomendados

1. **Inmediatamente:**
   - ✅ Iniciar el backend en `http://localhost:8080`
   - ✅ Ejecutar `npm run test-backend` para verificar

2. **Para desarrollo:**
   - 🔧 Configurar scripts de inicio automático
   - 🔧 Implementar health checks
   - 🔧 Configurar variables de entorno apropiadas

3. **Para producción:**
   - 🚀 Configurar URLs de producción en `.env.production`
   - 🔒 Implementar autenticación y autorización
   - 📊 Configurar monitoreo y logs

---

## 🆘 Solución de Problemas Comunes

### Problema: "Puerto ya en uso"
```bash
# Encontrar proceso usando el puerto 8080
netstat -ano | findstr :8080
# Terminar el proceso (reemplaza PID con el número real)
taskkill /PID <PID> /F
```

### Problema: "Variables de entorno no se cargan"
- Reinicia el servidor de desarrollo después de cambiar `.env`
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Usa `import.meta.env.VITE_API_URL` en lugar de `process.env.VITE_API_URL`

### Problema: "404 Not Found en endpoints"
- Verifica las rutas en tu backend Spring Boot
- Confirma que los controladores estén anotados correctamente
- Revisa que el context path sea correcto

---

**Última actualización:** $(Get-Date)
**Autor:** Agente de Verificación de Conectividad SkillLink
