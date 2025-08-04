# Rural Development Project - AWS CI/CD Pipeline

This repository contains a Next.js application with a comprehensive CI/CD pipeline implemented using GitHub Actions and deployed on AWS infrastructure.

## 🚀 Features

- **Automated Testing**: Linting, type checking, and build verification
- **Security Scanning**: npm audit and Snyk vulnerability scanning
- **Performance Testing**: Lighthouse CI for performance metrics
- **Multi-Environment Deployment**: Staging and production environments on AWS
- **AWS Infrastructure**: S3, ECS, and ALB integration
- **Container Support**: Docker and ECR integration
- **Monitoring**: Health check endpoints and CloudWatch integration

## 📋 Prerequisites

- Node.js 18+
- Docker and Docker Compose (for containerized deployment)
- GitHub repository with Actions enabled
- AWS account with appropriate permissions
- AWS CLI configured with credentials

## 🔧 Setup

### 1. AWS Infrastructure Setup

First, deploy the AWS infrastructure using the provided CloudFormation template:

```bash
# Navigate to the AWS directory
cd aws

# Deploy staging environment (Simple infrastructure)
./deploy-simple.sh staging

# Deploy production environment (Simple infrastructure)
./deploy-simple.sh production
```

**Infrastructure Components:**
- **VPC** with public subnets and internet gateway
- **ECS Cluster** with Fargate tasks
- **Application Load Balancer** with target groups and listeners
- **S3 Bucket** for static assets (private)
- **CloudWatch Logs** for application logging
- **IAM Roles** for ECS execution and task permissions

### 2. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

#### Required AWS Secrets:
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key
- `AWS_REGION`: AWS region (e.g., us-east-1)

#### AWS Resource Secrets (Staging):
- `AWS_S3_BUCKET_STAGING`: `rural-development-staging-236128319641`
- `AWS_ECS_CLUSTER_STAGING`: `rural-development-staging-cluster`
- `AWS_ECS_SERVICE_STAGING`: `rural-development-staging-service`

#### AWS Resource Secrets (Production):
- `AWS_S3_BUCKET_PRODUCTION`: `rural-development-production-236128319641`
- `AWS_ECS_CLUSTER_PRODUCTION`: `rural-development-production-cluster`
- `AWS_ECS_SERVICE_PRODUCTION`: `rural-development-production-service`

#### Optional Secrets:
- `SNYK_TOKEN`: Snyk security scanning token
- `SLACK_WEBHOOK_URL`: Slack webhook for notifications

### 3. Environment Variables

Create environment files for different environments:

```bash
# .env.local (for local development)
NEXT_PUBLIC_ENV=development
CUSTOM_KEY=your_custom_key

# .env.production (for production)
NEXT_PUBLIC_ENV=production
CUSTOM_KEY=your_production_key
```

## 🏗️ CI/CD Pipeline

### Continuous Integration (CI)

The CI pipeline runs on every push and pull request:

1. **Lint and Type Check**
   - ESLint code quality checks
   - TypeScript type checking
   - Runs on: `main`, `develop` branches

2. **Build and Test**
   - Application build verification
   - Basic health check testing
   - Performance testing (Lighthouse CI)

3. **Security Scan**
   - npm audit for dependency vulnerabilities
   - Snyk security scanning (optional)

### Continuous Deployment (CD)

The deployment pipeline supports multiple environments:

#### Staging Deployment
- **Trigger**: Push to `develop` branch or manual workflow dispatch
- **Environment**: Staging
- **Platform**: AWS ECS with S3
- **Infrastructure**: Application Load Balancer, ECS Fargate

#### Production Deployment
- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Environment**: Production
- **Platform**: AWS ECS with S3
- **Infrastructure**: Application Load Balancer, ECS Fargate

#### Docker Deployment
- **Trigger**: Push to `main` branch
- **Action**: Build and push Docker image to AWS ECR
- **Tags**: `latest` and commit SHA

## 🐳 Docker Support

### Production Build

```bash
# Build production image
docker build -t rural-development:latest .

# Run production container
docker run -p 3000:3000 rural-development:latest
```

### Development Build

```bash
# Build development image
docker build -f Dockerfile.dev -t rural-development:dev .

# Run development container
docker run -p 3001:3000 rural-development:dev
```

### Docker Compose

```bash
# Start production stack
docker-compose up -d

# Start development stack
docker-compose --profile dev up -d
```

### AWS ECR Integration

```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com

# Tag image for ECR
docker tag rural-development:latest your-account.dkr.ecr.us-east-1.amazonaws.com/rural-development:latest

# Push to ECR
docker push your-account.dkr.ecr.us-east-1.amazonaws.com/rural-development:latest
```

## 📊 Monitoring

### Health Check Endpoint

The application includes a health check endpoint at `/api/health`:

```bash
# Check application health
curl http://localhost:3000/api/health

# Response example:
{
  "status": "healthy"
}
```

### Docker Health Checks

Docker containers include health checks that verify the application is running correctly.

## 🔒 Security Features

### Security Headers

The application includes security headers:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`

### Network Security

- ECS tasks run in public subnets with public IPs for ECR access
- Security groups restrict traffic to necessary ports
- S3 bucket is private with no public access

## 🚀 Deployment Options

### 1. AWS ECS (Recommended)

The pipeline is configured for AWS ECS deployment with S3:

```bash
# Deploy infrastructure first
cd aws
./deploy-simple.sh production

# The CI/CD pipeline will automatically deploy to ECS
```

### 2. Docker Deployment

For containerized deployment:

```bash
# Build and push to ECR
docker build -t your-account.dkr.ecr.us-east-1.amazonaws.com/rural-development:latest .
docker push your-account.dkr.ecr.us-east-1.amazonaws.com/rural-development:latest

# Deploy to ECS manually
aws ecs update-service --cluster your-cluster --service your-service --force-new-deployment
```

### 3. Traditional Hosting

For traditional hosting providers:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📝 Workflow Files

### `.github/workflows/ci.yml`
- Continuous Integration pipeline
- Linting, type checking, building
- Security and performance testing

### `.github/workflows/deploy.yml`
- Continuous Deployment pipeline
- Multi-environment deployment to AWS
- Docker image building and pushing to ECR
- S3 static asset deployment
- ECS service updates

## 🛠️ Local Development

### Prerequisites
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Docker Development
```bash
# Start development environment
docker-compose --profile dev up -d

# View logs
docker-compose logs -f app-dev
```

### Testing
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build application
npm run build
```

## 📈 Performance Optimization

### Next.js Configuration

The application is optimized with:
- Standalone output for Docker deployment
- Image optimization with WebP and AVIF support
- CSS optimization
- Console removal in production
- Package import optimization

### AWS Infrastructure Optimization

- S3 for static asset hosting
- ECS Fargate for serverless container management
- Application Load Balancer for traffic distribution
- Auto-scaling based on CPU and memory usage

### Docker Optimization

- Multi-stage builds for smaller images
- Layer caching for faster builds
- Alpine Linux base for security and size
- Non-root user for security
- ECR integration for secure image storage

## 🔧 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **AWS Deployment Failures**
   - Verify AWS credentials and permissions
   - Check CloudFormation stack status
   - Review ECS service logs in CloudWatch
   - Verify S3 bucket permissions

3. **Docker Issues**
   - Ensure Docker is running
   - Check port conflicts
   - Verify Dockerfile syntax
   - Check ECR login status

4. **ECS Issues**
   - Check ECS service status
   - Review task logs in CloudWatch
   - Verify ECR image exists
   - Check security group configurations

### Debug Commands

```bash
# Check application status
curl http://localhost:3000/api/health

# View Docker logs
docker logs <container_name>

# Check Docker container health
docker inspect <container_name> | grep Health -A 10

# Debug Next.js build
npm run build --verbose

# Check AWS ECS service status
aws ecs describe-services --cluster rural-development-staging-cluster --services rural-development-staging-service

# View ECS logs
aws logs describe-log-groups --log-group-name-prefix /ecs/rural-development

# Verify S3 bucket contents
aws s3 ls s3://rural-development-staging-236128319641/

# Check ECR repository
aws ecr describe-repositories --repository-names rural-development

# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name rural-development-staging-simple
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [AWS CloudFormation Documentation](https://docs.aws.amazon.com/cloudformation/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS ECR Documentation](https://docs.aws.amazon.com/ecr/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
