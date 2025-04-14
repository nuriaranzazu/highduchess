# High Duchess Cannabis Platform

## Development Setup
1. Install Docker Desktop
2. Run: `docker compose up --build`
3. Access services:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - Strapi CMS: http://localhost:1337/admin

## Key Features
- Modern React frontend with anime.js animations
- Node.js API with MongoDB integration
- Strapi CMS for content management
- Full Docker containerization

## CMS Best Practices

### Security Configuration
- **Environment Variables**:
  ```env
  STRAPI_ADMIN_KEY=your_secure_key
  JWT_SECRET=your_jwt_secret  
  API_TOKEN_SALT=your_api_salt
  ```
- **Role-Based Access Control**:
  - Create separate roles for Content Editors, Moderators, and Administrators
  - Use Strapi's built-in RBAC system for granular permissions

### Content Modeling Standards
1. **Structured Content Types**:
   - Blog Posts: Title, Rich Content, Featured Image, Categories
   - Flower Entries: Strain Details, Lab Results, Media Gallery
2. **Relationship Management**:
   - Use many-to-many relations for Effects/Aromas/Flavors
   - Maintain a centralized Category taxonomy

### Media Management
- **Optimized Assets**:
  ```bash
  docker exec strapi_cms npm install strapi-provider-upload-aws-s3
  ```
- **Storage Guidelines**:
  - Max image size: 5MB per upload
  - Supported formats: WebP, AVIF, JPEG XL
  - Auto-generate 3 size variants (thumb, medium, large)

### Maintenance Operations
- **Database Backups**:
  ```bash
  docker exec mongo mongodump --uri="mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@mongo:27017" --archive=/backup/$(date +%Y-%m-%d).gz --gzip
  ```
- **Strapi Updates**:
  ```bash
  docker compose exec cms npm run strapi upgrade
  ```

## Monitoring & Analytics
```bash
# Real-time monitoring
docker compose logs -f cms

# Performance metrics
docker stats $(docker ps -q)
```

## Deployment Strategy
1. **Production Environment**:
   - Use separate databases for CMS and application data
   - Enable Gzip compression in Strapi config
   - Configure rate limiting for API endpoints
2. **CI/CD Pipeline**:
   - Automated content model validation
   - Schema migration testing
   - Blue/green deployment strategy

## Content Editor Checklist
1. Before publishing:
   - Validate metadata completeness
   - Check image alt-text and captions
   - Test responsive layouts
2. Version Control:
   - Use Strapi's revision history feature
   - Maintain changelog in CMS comments
