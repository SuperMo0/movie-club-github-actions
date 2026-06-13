 FROM node:22-alpine

 WORKDIR /usr/src/app

 COPY ./package* ./

 RUN npm ci 

 COPY . .

 RUN "npm run build && npm run start"



