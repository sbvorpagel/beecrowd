#include <stdio.h>

int main() {

  int n, years, months, days;

  scanf("%d", &n);

  years = n / 365;

  months = (n - (years * 365)) / 30;

  days = n - (years * 365) - (months * 30);

  printf("%d ano(s)\n%d mes(es)\n%d dia(s)\n", years, months, days);

  return 0;
}
