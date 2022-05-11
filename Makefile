build: 
	cd docker && docker build -t sbvorpagel/beecrowd .
run:
	docker run --rm -v `pwd`/code:/code sbvorpagel/beecrowd $(CODE) $(VERBOSE)
rm:
	docker image rm sbvorpagel/beecrowd
init_code:
	mkdir ./code/${CODE}
	cp ./code/sample/* ./code/${CODE}/
	mv ./code/${CODE}/sample.c ./code/${CODE}/${CODE}.c
	mv ./code/${CODE}/sample.cpp ./code/${CODE}/${CODE}.cpp
	mv ./code/${CODE}/sample.js ./code/${CODE}/${CODE}.js
	mv ./code/${CODE}/sample.rb ./code/${CODE}/${CODE}.rb
