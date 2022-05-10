all: build run
build: 
	cd docker && docker build -t sbvorpagel/beecrowd .
run:
	docker run --rm -v `pwd`/code:/code sbvorpagel/beecrowd $(CODE) $(VERBOSE)
rm:
	docker image rm sbvorpagel/beecrowd
