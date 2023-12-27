#include <iostream>

using namespace std;

struct Fraction {
    int numerator;
    int denominator;
};

Fraction operator+(Fraction f1, Fraction f2) {
    Fraction result;
    result.numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    result.denominator = f1.denominator * f2.denominator;
    return result;
}

Fraction operator-(Fraction f1, Fraction f2) {
    Fraction result;
    result.numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    result.denominator = f1.denominator * f2.denominator;
    return result;
}

Fraction operator*(Fraction f1, Fraction f2) {
    Fraction result;
    result.numerator = f1.numerator * f2.numerator;
    result.denominator = f1.denominator * f2.denominator;
    return result;
}

Fraction operator/(Fraction f1, Fraction f2) {
    Fraction result;
    result.numerator = f1.numerator * f2.denominator;
    result.denominator = f1.denominator * f2.numerator;
    return result;
}

Fraction euclidean(Fraction fraction) {
    int a = fraction.numerator, b = fraction.denominator, c;
    while (b != 0) {
        c = a % b;
        a = b;
        b = c;
    }
    fraction.numerator /= abs(a);
    fraction.denominator /= abs(a);
    return fraction;
}

string printFraction(Fraction fraction) {
    return to_string(fraction.numerator) + '/' + to_string(fraction.denominator);
}

int main() {
    int n, i, j;
    cin >> n;

    for (i = 0; i < n; i++) {
        char voidOperator, operatorSign;
        Fraction f1, f2, result;
        cin >> f1.numerator >> voidOperator >> f1.denominator >> operatorSign >> f2.numerator >>
            voidOperator >> f2.denominator;
        if (operatorSign == '+')
            result = f1 + f2;
        else if (operatorSign == '-')
            result = f1 - f2;
        else if (operatorSign == '*')
            result = f1 * f2;
        else if (operatorSign == '/')
            result = f1 / f2;
            cout << printFraction(result) << " = " << printFraction(euclidean(result)) << endl;
        }

    return 0;
}
