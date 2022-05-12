#include <stdio.h>

int main() {

  int quant1, quant2;
  double value1, value2;

  scanf("%d %d %lf %d %d %lf", &quant1, &quant1, &value1, &quant2, &quant2,
        &value2);

  printf("VALOR A PAGAR: R$ %.2lf\n", quant1 * value1 + quant2 * value2);

  return 0;
}
