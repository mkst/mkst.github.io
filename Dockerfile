FROM ubuntu:20.04

RUN apt-get update && \
  apt-get install -y \
    build-essential \
    ruby-full \
    zlib1g-dev

RUN mkdir /app && gem install bundler jekyll:3.8.5

COPY Gemfile /app

WORKDIR /app

RUN bundle install

CMD bundle exec jekyll serve --host 0.0.0.0

EXPOSE 4000
