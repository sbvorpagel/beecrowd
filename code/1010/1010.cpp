#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  int quant1, quant2;
  double value1, value2;

  cin >> quant1 >> quant1 >> value1 >> quant2 >> quant2 >> value2;

  cout << "VALOR A PAGAR: R$ " << fixed << setprecision(2)
       << quant1 * value1 + quant2 * value2 << endl;

  return 0;
}
