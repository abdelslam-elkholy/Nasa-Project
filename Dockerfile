FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY Client/package.json Client/

RUN npm run install-client  --omit=dev

COPY Server/package.json Server/
RUN npm run install-server  --omit=dev

COPY Client/ Client/
RUN npm run build --prefix Client

COPY Server/ Server/

USER node

CMD [ "npm" , "start" , "--prefix" , "Server" ]

EXPOSE 5000