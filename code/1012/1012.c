#include <stdio.h>

int main() {

  double PI = 3.14159, A, B, C;

  scanf("%lf %lf %lf", &A, &B, &C);

  printf("TRIANGULO: %.3lf\n", A * C / 2.0);
  printf("CIRCULO: %.3lf\n", PI * C * C);
  printf("TRAPEZIO: %.3lf\n", (A + B) * C / 2.0);
  printf("QUADRADO: %.3lf\n", B * B);
  printf("RETANGULO: %.3lf\n", A * B);

  return 0;
}
