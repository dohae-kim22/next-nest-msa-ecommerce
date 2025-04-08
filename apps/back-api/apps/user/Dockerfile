# Base image
FROM node:alpine AS development

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy all source files
COPY . .

# Start the user service in development mode
CMD ["pnpm", "start:dev", "user"]