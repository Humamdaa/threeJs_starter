# Use Ubuntu as the base image to align with the workflow
FROM ubuntu:latest

# Set the working directory
WORKDIR /app

# Install Node.js 18 and other dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
