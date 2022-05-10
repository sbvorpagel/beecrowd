FROM ubuntu:22.04
RUN apt update
RUN apt install -y nodejs ruby build-essential python3 lua5.3 haskell-platform
WORKDIR /beecrowd
VOLUME ["/code"]
COPY ./judge /judge
ENTRYPOINT ["../judge/judge.rb"]
