# Use the official Node.js runtime as the base image
FROM node:20.14.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --ignore-scripts

COPY ./src ./src
COPY ./public ./public
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY components.json ./

# Build the React app for production
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]