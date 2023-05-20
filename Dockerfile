FROM ruby:3.2.2-alpine3.18

MAINTAINER Marius Serban <mario.serbn@gmail.com>

WORKDIR /app

COPY . .

RUN apk --update add build-base nodejs tzdata postgresql-dev postgresql-client libxslt-dev libxml2-dev imagemagick git make
RUN gem install rails

ENTRYPOINT ["tail", "-f", "/dev/null"]

