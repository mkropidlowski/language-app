FROM node:16.14-alpine

WORKDIR /app

COPY .next /app/.next
COPY node_modules /app/node_modules
COPY pages /app/pages
COPY public /app/public
COPY next.config.js /app/next.config.js
COPY package.json /app/package.json
COPY .env /app/.env

EXPOSE 80

CMD ["npx", "next", "start", "-p", "80"]