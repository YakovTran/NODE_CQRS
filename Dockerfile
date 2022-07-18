FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /
COPY . .
RUN yarn install --production
CMD ["node", "server.js"]
EXPOSE 3000