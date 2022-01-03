FROM node:16.0.0-alpine

COPY package.json ./
COPY ./public ./public
RUN yarn install

COPY ./src ./src
COPY docker-entrypoint.sh ./

ENTRYPOINT ["./docker-entrypoint.sh"]