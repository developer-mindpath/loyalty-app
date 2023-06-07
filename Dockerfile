FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run setup && npm cache clean -f
RUN npm run build

CMD [ "npm","run", "build" ]
CMD [ "npm","run", "serve:prod" ]

EXPOSE 3000