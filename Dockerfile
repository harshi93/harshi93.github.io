FROM ubuntu:16.04

COPY . /app

RUN apt-get update && apt install nodejs -y && apt install npm -y

EXPOSE 3000

WORKDIR /app

ENTRYPOINT ["npm", "install"]

CMD ["npm", "start"]