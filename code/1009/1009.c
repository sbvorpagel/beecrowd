#include <stdio.h>

int main() {

  char name[1024];
  double base;
  double sales;
  double newSalary;

  scanf("%s %lf %lf", name, &base, &sales);

  newSalary = base + (sales * 0.15);

  printf("TOTAL = R$ %.2lf\n", newSalary);
  return 0;
}
