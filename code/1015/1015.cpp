#include <cmath>
#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  double x1, x2, y1, y2;

  cin >> x1 >> y1 >> x2 >> y2;

  cout << fixed << setprecision(4) << sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
       << endl;

  return 0;
}
