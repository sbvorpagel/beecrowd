#include <cmath>
#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  double PI = 3.14159;
  double r;

  cin >> r;

  cout << "VOLUME = " << fixed << setprecision(3)
       << (4.0 / 3.0) * PI * pow(r, 3) << endl;

  return 0;
}
