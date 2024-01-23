FROM node:21

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . --exclude=node_modules --exclude=.next

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]