#include <stdio.h>

int main() {

  double num1;
  double num2;

  double num1_weight = 3.5;
  double num2_weight = 7.5;

  double average;

  scanf("%lf %lf", &num1, &num2);

  average =
      (num1 * num1_weight + num2 * num2_weight) / (num1_weight + num2_weight);

  printf("MEDIA = %.5lf\n", average);

  return 0;
}
