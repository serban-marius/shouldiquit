FROM ruby:3.2.2-alpine3.18

MAINTAINER Marius Serban <mario.serbn@gmail.com>

WORKDIR /app

COPY . .

ENTRYPOINT ["tail", "-f", "/dev/null"]

