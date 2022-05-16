#include <stdio.h>

int main() {

  double n1, n2, n3, n4, exam, average, averageF;

  scanf("%lf %lf %lf %lf", &n1, &n2, &n3, &n4);

  average = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;

  printf("Media: %.1lf\n", average);

  if (average < 5) {
    printf("Aluno reprovado.\n");
    return 0;
  }

  if (average > 7) {
    printf("Aluno aprovado.\n");
    return 0;
  }

  printf("Aluno em exame.\n");

  scanf("%lf", &exam);

  printf("Nota do exame: %.1lf\n", exam);

  averageF = (average + exam) / 2;

  if (averageF < 5) {
    printf("Aluno reprovado.\n");
  } else {
    printf("Aluno aprovado.\n");
  }

  printf("Media final: %.1lf\n", averageF);

  return 0;
}
