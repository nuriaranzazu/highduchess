# Plataforma High Duchess Cannabis

## Configuración de desarrollo
1. Instala Docker Desktop
2. Ejecuta: `docker compose up --build`
3. Accede a los servicios:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - Strapi CMS: http://localhost:1337/admin

## Características principales
- Frontend moderno con React y animaciones de anime.js
- API en Node.js con integración de MongoDB
- Strapi CMS para la gestión de contenido
- Contenerización completa con Docker

## Mejores prácticas para CMS

### Configuración de seguridad
- **Variables de entorno**:
  ```env
  STRAPI_ADMIN_KEY=tu_clave_segura
  JWT_SECRET=tu_jwt_secret  
  API_TOKEN_SALT=tu_api_salt
  ```
- **Control de acceso basado en roles**:
  - Crea roles separados para Editores de Contenido, Moderadores y Administradores
  - Utiliza el sistema RBAC integrado de Strapi para permisos granulares

### Estándares de modelado de contenido
1. **Tipos de contenido estructurado**:
   - Publicaciones de blog: Título, Contenido enriquecido, Imagen destacada, Categorías
   - Entradas de flores: Detalles de la cepa, Resultados de laboratorio, Galería de medios
2. **Gestión de relaciones**:
   - Utiliza relaciones de muchos a muchos para Efectos/Aromas/Sabores
   - Mantén una taxonomía centralizada de Categorías

### Gestión de medios
- **Recursos optimizados**:
  ```bash
  docker exec strapi_cms npm install strapi-provider-upload-aws-s3
  ```
- **Pautas de almacenamiento**:
  - Tamaño máximo de imagen: 5 MB por carga
  - Formatos compatibles: WebP, AVIF, JPEG XL
  - Generar automáticamente 3 variantes de tamaño (miniatura, mediano, grande)

### Operaciones de mantenimiento
- **Copias de seguridad de la base de datos**:
  ```bash
  docker exec mongo mongodump --uri="mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@mongo:27017" --archive=/backup/$(date +%Y-%m-%d).gz --gzip
  ```
- **Actualizaciones de Strapi**:
  ```bash
  docker compose exec cms npm run strapi upgrade
  ```

## Monitoreo y análisis
```bash
# Monitoreo en tiempo real
docker compose logs -f cms

# Métricas de rendimiento
docker stats $(docker ps -q)
```

## Estrategia de implementación
1. **Entorno de producción**:
   - Utiliza bases de datos separadas para CMS y datos de la aplicación
   - Habilita la compresión Gzip en la configuración de Strapi
   - Configura la limitación de tasa para los endpoints de la API
2. **Pipeline de CI/CD**:
   - Validación automatizada del modelo de contenido
   - Pruebas de migración de esquemas
   - Estrategia de despliegue azul/verde

## Lista de verificación para el Editor de Contenido
1. Antes de publicar:
   - Verificar la completitud de los metadatos
   - Revisar el texto alternativo y las descripciones de las imágenes
   - Probar diseños responsivos
2. Control de versiones:
   - Utiliza la función de historial de revisiones de Strapi
   - Mantén el registro de cambios en los comentarios del CMS