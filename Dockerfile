# Build Phase since npm start is not meant for a production env
FROM node:16-alpine AS builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Run Phase using nginx to start the dev env
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
