FROM node:24-alpine

WORKDIR /usr/src/app

COPY package* .
COPY ./frontend/package*.json ./frontend/
COPY ./backend/package*.json ./backend/

RUN npm ci 

COPY . .

RUN npm run build

CMD ["npm","run","start"]