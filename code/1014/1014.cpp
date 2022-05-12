#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  int km;
  double fuel;

  cin >> km >> fuel;

  cout << fixed << setprecision(3) << km / fuel << " km/l" << endl;

  return 0;
}
