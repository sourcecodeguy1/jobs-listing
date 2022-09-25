FROM node:16-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]