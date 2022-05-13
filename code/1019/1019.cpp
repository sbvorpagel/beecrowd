#include <iostream>
using namespace std;

int main() {

  int n, hours, minutes, seconds;

  cin >> n;

  hours = n / 3600;

  minutes = (n - (hours * 3600)) / 60;

  seconds = n - (hours * 3600) - (minutes * 60);

  cout << hours << ":" << minutes << ":" << seconds << endl;

  return 0;
}
