FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=5009

EXPOSE 5009

CMD ["npm", "run", "server"]