#include <stdio.h>

int main() {

  int emp;
  int hours;
  float salary;

  scanf("%d %d %f", &emp, &hours, &salary);

  printf("NUMBER = %d\n", emp);
  printf("SALARY = U$ %.2f\n", hours * salary);

  return 0;
}
