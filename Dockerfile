FROM node:16-alpine as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build

# Stage - Production
FROM nginx:1.17-alpine
EXPOSE 8082
RUN rm -rf /etc/nginx/conf.d/*
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]