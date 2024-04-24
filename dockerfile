FROM node:16-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY . .

# Bundle app source
RUN npm install

# Expose port 3000
EXPOSE 3000

# Run app
CMD ["node", "index.js"]