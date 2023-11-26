FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

RUN npm run build --prefix Client

USER node

CMD [ "npm" , "start" , "--prefix" , "Server" ]

EXPOSE 5000