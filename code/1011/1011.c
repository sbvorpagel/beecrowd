#include <math.h>
#include <stdio.h>

int main() {

  double PI = 3.14159;
  double r;

  scanf("%lf", &r);

  printf("VOLUME = %.3lf\n", (4.0 / 3.0) * PI * (pow(r, 3)));

  return 0;
}
