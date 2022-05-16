#include <cmath>
#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  double A, B, C, r1, r2, delta;

  cin >> A >> B >> C;

  delta = B * B - 4 * A * C;

  if (delta < 0 || A == 0) {
    cout << "Impossivel calcular" << endl;
  } else {

    r1 = (-B + sqrt(delta)) / (2 * A);
    r2 = (-B - sqrt(delta)) / (2 * A);

    cout << fixed << setprecision(5) << "R1 = " << r1 << endl
         << "R2 = " << r2 << endl;
  }

  return 0;
}
