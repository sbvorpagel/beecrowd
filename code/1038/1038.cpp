#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  double prices[] = {4, 4.5, 5, 2, 1.5};

  int productCode, quantity;

  cin >> productCode >> quantity;

  cout << "Total: R$ " << fixed << setprecision(2)
       << prices[productCode - 1] * quantity << endl;

  return 0;
}
