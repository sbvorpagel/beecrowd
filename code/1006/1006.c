#include <stdio.h>

int main() {

  float num1;
  float num2;
  float num3;

  int num1_weight = 2;
  int num2_weight = 3;
  int num3_weight = 5;

  float average;

  scanf("%f %f %f", &num1, &num2, &num3);

  average = (num1 * num1_weight + num2 * num2_weight + num3 * num3_weight) /
            (num1_weight + num2_weight + num3_weight);

  printf("MEDIA = %.1f\n", average);

  return 0;
}
