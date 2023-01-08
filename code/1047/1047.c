#include <stdio.h>

int main() {

  int initialHour, initialMinute, finalHour, finalMinute, initialTime, finalTime, durationTime, durationHour, durationMinute;

  scanf("%d %d %d %d", &initialHour, &initialMinute, &finalHour, &finalMinute);

  initialTime = initialHour * 60 + initialMinute;
  finalTime = finalHour * 60 + finalMinute;

  if (initialTime < finalTime) {
    durationTime = finalTime - initialTime;
  } else {
    durationTime = (60 * 24) - initialTime + finalTime;
  }

  durationHour = durationTime / 60;
  durationMinute = durationTime % 60;

  printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", durationHour, durationMinute);

  return 0;
}
