#include <stdio.h>
 
int main() {

  int a;
  int b;
  
  scanf("%d %d", &a, &b);
  
  printf("O JOGO DUROU %d HORA(S)\n", a<b? b-a : 24-a+b);

  return 0;
}
