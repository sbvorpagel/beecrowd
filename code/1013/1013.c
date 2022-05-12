#include <stdio.h>
#include <stdlib.h>

int getBigger(int a, int b) { return (a + b + abs(a - b)) / 2; }

int main() {

  int A, B, C;

  scanf("%d %d %d", &A, &B, &C);

  printf("%d eh o maior\n", getBigger(getBigger(A, B), C));

  return 0;
}
