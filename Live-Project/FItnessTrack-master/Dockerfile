# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for server
COPY server/package*.json ./server/

# Install server dependencies
RUN cd server && npm install

# Copy package.json and package-lock.json for client
COPY client/package*.json ./client/

# Install client dependencies
RUN cd client && npm install

# Copy the rest of the application code
COPY . .

# Build the client
RUN cd client && npm run build

# Expose the port the app runs on
EXPOSE 8081

# Command to run the application
CMD ["npm", "start", "--prefix", "server"]
