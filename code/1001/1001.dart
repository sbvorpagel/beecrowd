import 'dart:io';

int readNumber() {
    String? input = stdin.readLineSync();
    if (input == null) {
        return 0;
    }
    return int.parse(input);
}

void main () {
    int a = readNumber();
    int b = readNumber();
    print("X = ${a+b}");
}