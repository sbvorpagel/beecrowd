#include <stdio.h>

int main() {

  int km;
  double fuel;

  scanf("%d %lf", &km, &fuel);

  printf("%.3lf km/l\n", km / fuel);
  return 0;
}
