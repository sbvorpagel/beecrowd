FROM ubuntu:22.04
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update
RUN apt install -y --no-install-recommends \
  nodejs ruby build-essential python3 \
  lua5.3 haskell-platform rustc default-jdk \
  clojure mono-complete fpc littler kotlin \
  unzip curl git ocaml clang libicu-dev \
  libpython2.7-dev libtinfo5 libncurses5 \
  libpython2.7 libz3-dev wget
RUN git clone https://github.com/flutter/flutter.git -b stable
RUN wget -c https://download.swift.org/swift-5.7.3-release/ubuntu2204-aarch64/swift-5.7.3-RELEASE/swift-5.7.3-RELEASE-ubuntu22.04-aarch64.tar.gz
RUN tar xzf swift-5.7.3-RELEASE-ubuntu22.04-aarch64.tar.gz
RUN mv swift-5.7.3-RELEASE-ubuntu22.04-aarch64 /usr/share/swift
ENV PATH="/flutter/bin:/usr/share/swift/usr/bin:${PATH}"
RUN dart --version
WORKDIR /beecrowd
VOLUME ["/code"]
COPY ./judge /judge
ENTRYPOINT ["../judge/judge.rb"]
