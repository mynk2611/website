FROM node:20-alpine3.20

WORKDIR /usr/src/app

COPY package*.json tsconfig.json ./
RUN npm install

COPY ./prisma ./prisma
COPY ./db ./db
RUN npm run db:generate

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
