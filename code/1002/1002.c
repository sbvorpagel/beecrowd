#include <stdio.h>

int main() {

  double num;

  scanf("%lf", &num);
  printf("A=%.4lf\n", 3.14159 * (num * num));

  return 0;
}
