#include <stdio.h>

int main() {

  double salary, percente;

  scanf("%lf", &salary);

  if (salary <= 400.00) {
    percente = 15;
  } else if (salary <= 800.00) {
    percente = 12;
  } else if (salary <= 1200.00) {
    percente = 10;
  } else if (salary <= 2000.00) {
    percente = 7;
  } else {
    percente = 4;
  }

  printf("Novo salario: %.2f\n", salary * (1 + (percente/100)));
  printf("Reajuste ganho: %.2f\n", salary * (percente/100));
  printf("Em percentual: %.0f %%\n", percente);

  return 0;
}
