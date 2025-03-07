# Use official Node.js image as the base
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the app files
COPY . .

# Build the Vite app
RUN npm run build

# Use lightweight Nginx for serving static files
FROM nginx:alpine

# Copy built files to Nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
