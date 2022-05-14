#include <math.h>
#include <stdio.h>

int getCoins(double num1, double num2) {
  int n1 = round(num1 * 1000);
  int n2 = round(num2 * 1000);

  return n1 / n2;
}

double calcBanknotesAndPrint(double value, int note) {

  int numberOfBanckNotes = value / note;

  printf("%d nota(s) de R$ %d.00\n", numberOfBanckNotes, note);

  return value - (numberOfBanckNotes * note);
}

double calcCoinAndPrint(double value, double coin) {

  int numberOfCoins = getCoins(value, coin);

  printf("%d moeda(s) de R$ %.2lf\n", numberOfCoins, coin);

  return value - (numberOfCoins * coin);
}

int main() {

  double n;

  scanf("%lf", &n);

  printf("NOTAS:\n");
  n = calcBanknotesAndPrint(n, 100);
  n = calcBanknotesAndPrint(n, 50);
  n = calcBanknotesAndPrint(n, 20);
  n = calcBanknotesAndPrint(n, 10);
  n = calcBanknotesAndPrint(n, 5);
  n = calcBanknotesAndPrint(n, 2);
  printf("MOEDAS:\n");
  n = calcCoinAndPrint(n, 1.00);
  n = calcCoinAndPrint(n, 0.50);
  n = calcCoinAndPrint(n, 0.25);
  n = calcCoinAndPrint(n, 0.10);
  n = calcCoinAndPrint(n, 0.05);
  calcCoinAndPrint(n, 0.01);

  return 0;
}
