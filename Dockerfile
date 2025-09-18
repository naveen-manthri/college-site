# Step 1: Build Angular App
FROM node:18 AS build
WORKDIR /college-site
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration production

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /college-site/dist/college-app /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
