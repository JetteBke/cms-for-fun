FROM node:15.13.0-alpine

COPY package.json ./
COPY ./public ./public
RUN yarn install

COPY ./src ./src
COPY docker-entrypoint.sh ./

ENTRYPOINT ["./docker-entrypoint.sh"]