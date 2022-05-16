#include <stdio.h>

int main() {

  double prices[] = {4, 4.5, 5, 2, 1.5};

  int productCode, quantity;

  scanf("%d %d", &productCode, &quantity);

  printf("Total: R$ %.2f\n", prices[productCode - 1] * quantity);

  return 0;
}
