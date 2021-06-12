FROM nginx:latest as production-stage
RUN mkdir /app
COPY dist/spa /app
COPY nginx.conf /etc/nginx/nginx.conf