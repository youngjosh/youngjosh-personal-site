FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY server.js ./
COPY build/ ./build/
RUN yarn
EXPOSE 3000
CMD ["sh", "-c", "node server.js"]