FROM node:14.17.3

WORKDIR /usr/pokedex
COPY package.json yarn.lock ./

RUN yarn 

COPY . .

EXPOSE 3000