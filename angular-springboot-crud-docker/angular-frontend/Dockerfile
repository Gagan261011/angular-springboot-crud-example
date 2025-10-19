# Stage 1: Build the Angular application
FROM public.ecr.aws/k9x5n2l5/shopper-node-18-alpine:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve the application with Nginx
FROM public.ecr.aws/y9w1g0t0/nginxinc/nginx-unprivileged:1.21-alpine
COPY --from=build /app/dist/angular-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
