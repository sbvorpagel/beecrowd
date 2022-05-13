#include <stdio.h>

int main() {

  int n;

  scanf("%d", &n);

  printf("%d\n", n);

  printf("%d nota(s) de R$ 100,00\n", (n / 100));
  n = n - ((n / 100) * 100);

  printf("%d nota(s) de R$ 50,00\n", (n / 50));
  n = n - ((n / 50) * 50);

  printf("%d nota(s) de R$ 20,00\n", (n / 20));
  n = n - ((n / 20) * 20);

  printf("%d nota(s) de R$ 10,00\n", (n / 10));
  n = n - ((n / 10) * 10);

  printf("%d nota(s) de R$ 5,00\n", (n / 5));
  n = n - ((n / 5) * 5);

  printf("%d nota(s) de R$ 2,00\n", (n / 2));
  n = n - ((n / 2) * 2);

  printf("%d nota(s) de R$ 1,00\n", n);

  return 0;
}
