# mkst.github.io


Docker quickstart:

```
# build
docker build . -t jek
# run
docker run --rm -v $(pwd):/app -p 4000:4000 jek
```

Non-docker quickstart

```
# install gems
bundle install
# run
bundle exec jekyll serve --host 0.0.0.0
```
