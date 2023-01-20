FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g yarn --force

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]