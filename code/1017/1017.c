#include <stdio.h>

int main() {

  int time, average;

  scanf("%d %d", &time, &average);

  printf("%.3lf\n", time * average / 12.0);

  return 0;
}
