#include <iostream>
using namespace std;

int main() {
  int initialHour, initialMinute, finalHour, finalMinute, initialTime, finalTime, durationTime, durationHour, durationMinute;

  cin >> initialHour >> initialMinute >> finalHour >> finalMinute;

  initialTime = initialHour * 60 + initialMinute;
  finalTime = finalHour * 60 + finalMinute;

  if (initialTime < finalTime) {
    durationTime = finalTime - initialTime;
  } else {
    durationTime = (60 * 24) - initialTime + finalTime;
  }

  durationHour = durationTime / 60;
  durationMinute = durationTime % 60;

  cout << "O JOGO DUROU " << durationHour << " HORA(S) E " << durationMinute << " MINUTO(S)" << endl;

  return 0;
}
