#!/bin/bash

# Simplified AWS Deployment Script for Testing
# Usage: ./deploy-simple.sh [staging|production]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default values
ENVIRONMENT=${1:-staging}
STACK_NAME="rural-development-${ENVIRONMENT}-simple"
REGION=${AWS_REGION:-us-east-1}

echo -e "${GREEN}🚀 Deploying Simplified Rural Development Project to AWS${NC}"
echo -e "${YELLOW}Environment: ${ENVIRONMENT}${NC}"
echo -e "${YELLOW}Stack Name: ${STACK_NAME}${NC}"
echo -e "${YELLOW}Region: ${REGION}${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS credentials are not configured. Please run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI and credentials verified${NC}"

# Create S3 bucket for CloudFormation artifacts if it doesn't exist
ARTIFACT_BUCKET="rural-development-artifacts-$(aws sts get-caller-identity --query Account --output text)"
echo -e "${YELLOW}Using artifact bucket: ${ARTIFACT_BUCKET}${NC}"

if ! aws s3 ls "s3://${ARTIFACT_BUCKET}" &> /dev/null; then
    echo -e "${YELLOW}Creating artifact bucket...${NC}"
    aws s3 mb "s3://${ARTIFACT_BUCKET}" --region "${REGION}"
    aws s3api put-bucket-versioning --bucket "${ARTIFACT_BUCKET}" --versioning-configuration Status=Enabled
fi

# Package CloudFormation template
echo -e "${YELLOW}📦 Packaging CloudFormation template...${NC}"
aws cloudformation package \
    --template-file infrastructure-simple.yml \
    --s3-bucket "${ARTIFACT_BUCKET}" \
    --output-template-file packaged-simple.yml

# Deploy CloudFormation stack
echo -e "${YELLOW}🏗️ Deploying CloudFormation stack...${NC}"
aws cloudformation deploy \
    --template-file packaged-simple.yml \
    --stack-name "${STACK_NAME}" \
    --parameter-overrides \
        Environment="${ENVIRONMENT}" \
    --capabilities CAPABILITY_IAM \
    --region "${REGION}"

# Get stack outputs
echo -e "${YELLOW}📋 Getting stack outputs...${NC}"
STACK_OUTPUTS=$(aws cloudformation describe-stacks \
    --stack-name "${STACK_NAME}" \
    --region "${REGION}" \
    --query 'Stacks[0].Outputs' \
    --output json)

# Extract important values
S3_BUCKET=$(echo "${STACK_OUTPUTS}" | jq -r '.[] | select(.OutputKey=="S3BucketName") | .OutputValue')
ECS_CLUSTER=$(echo "${STACK_OUTPUTS}" | jq -r '.[] | select(.OutputKey=="ECSClusterName") | .OutputValue')
ECS_SERVICE=$(echo "${STACK_OUTPUTS}" | jq -r '.[] | select(.OutputKey=="ECSServiceName") | .OutputValue')
ALB_DNS=$(echo "${STACK_OUTPUTS}" | jq -r '.[] | select(.OutputKey=="ALBDNSName") | .OutputValue')

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${GREEN}📊 Deployment Summary:${NC}"
echo -e "${YELLOW}S3 Bucket: ${S3_BUCKET}${NC}"
echo -e "${YELLOW}ECS Cluster: ${ECS_CLUSTER}${NC}"
echo -e "${YELLOW}ECS Service: ${ECS_SERVICE}${NC}"
echo -e "${YELLOW}ALB DNS: ${ALB_DNS}${NC}"
echo ""

# Create ECR repository if it doesn't exist
ECR_REPO="rural-development"
echo -e "${YELLOW}🔍 Checking ECR repository...${NC}"
if ! aws ecr describe-repositories --repository-names "${ECR_REPO}" &> /dev/null; then
    echo -e "${YELLOW}Creating ECR repository...${NC}"
    aws ecr create-repository --repository-name "${ECR_REPO}" --region "${REGION}"
fi

ECR_URI=$(aws ecr describe-repositories --repository-names "${ECR_REPO}" --region "${REGION}" --query 'repositories[0].repositoryUri' --output text)
echo -e "${GREEN}✅ ECR Repository: ${ECR_URI}${NC}"

# Create GitHub secrets file
echo -e "${YELLOW}📝 Creating GitHub secrets template...${NC}"
cat > github-secrets-simple.txt << EOF
# Add these secrets to your GitHub repository for simplified deployment:

AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=${REGION}

# S3 Buckets
AWS_S3_BUCKET_STAGING=${S3_BUCKET}
AWS_S3_BUCKET_PRODUCTION=${S3_BUCKET}

# ECS Resources
AWS_ECS_CLUSTER_STAGING=${ECS_CLUSTER}
AWS_ECS_CLUSTER_PRODUCTION=${ECS_CLUSTER}
AWS_ECS_SERVICE_STAGING=${ECS_SERVICE}
AWS_ECS_SERVICE_PRODUCTION=${ECS_SERVICE}

# Optional: Snyk for security scanning
SNYK_TOKEN=your_snyk_token
EOF

echo -e "${GREEN}✅ GitHub secrets template created: github-secrets-simple.txt${NC}"
echo ""
echo -e "${GREEN}🎉 Simplified AWS infrastructure deployment completed!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Add the secrets from github-secrets-simple.txt to your GitHub repository"
echo "2. Push your code to trigger the CI/CD pipeline"
echo "3. Monitor the deployment in the GitHub Actions tab"
echo ""
echo -e "${GREEN}Your application will be available at: ${ALB_DNS}${NC}"
echo -e "${YELLOW}Note: This is a simplified deployment without SSL/CloudFront for testing purposes.${NC}" 