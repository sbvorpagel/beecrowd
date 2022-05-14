#include <cmath>
#include <iomanip>
#include <iostream>
using namespace std;

int getCoins(double num1, double num2) {
  int n1 = ceil(num1 * 1000);
  int n2 = ceil(num2 * 1000);

  return n1 / n2;
}

double calcBanknotesAndPrint(double value, int note) {

  int numberOfBanckNotes = value / note;

  cout << numberOfBanckNotes << " nota(s) de R$ " << note << ".00" << endl;

  return value - (numberOfBanckNotes * note);
}

double calcCoinAndPrint(double value, double coin) {
  int numberOfCoins = getCoins(value, coin);

  cout << numberOfCoins << " moeda(s) de R$ " << fixed << setprecision(2)
       << coin << endl;

  return value - (numberOfCoins * coin);
}

int main() {

  double n;

  cin >> n;

  cout << "NOTAS:" << endl;
  n = calcBanknotesAndPrint(n, 100);
  n = calcBanknotesAndPrint(n, 50);
  n = calcBanknotesAndPrint(n, 20);
  n = calcBanknotesAndPrint(n, 10);
  n = calcBanknotesAndPrint(n, 5);
  n = calcBanknotesAndPrint(n, 2);
  cout << "MOEDAS:" << endl;
  n = calcCoinAndPrint(n, 1.00);
  n = calcCoinAndPrint(n, 0.50);
  n = calcCoinAndPrint(n, 0.25);
  n = calcCoinAndPrint(n, 0.10);
  n = calcCoinAndPrint(n, 0.05);
  calcCoinAndPrint(n, 0.01);
  return 0;
}
