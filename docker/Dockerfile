FROM ubuntu:22.04
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update
RUN apt install -y --no-install-recommends \
  nodejs ruby build-essential python3 \
  lua5.3 haskell-platform rustc default-jdk \
  clojure mono-complete fpc
# Dart install 
RUN apt install -y --no-install-recommends \
  unzip curl git 
RUN git clone https://github.com/flutter/flutter.git -b stable
ENV PATH="/flutter/bin:${PATH}"
RUN dart --version
# Dart install end
WORKDIR /beecrowd
VOLUME ["/code"]
COPY ./judge /judge
ENTRYPOINT ["../judge/judge.rb"]
