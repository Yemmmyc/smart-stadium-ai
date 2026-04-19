# Lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "server.js"]