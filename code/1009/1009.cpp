#include <iomanip>
#include <iostream>
#include <string>

using namespace std;

int main() {

  string name;
  double base;
  double sales;
  double newSalary;

  cin >> name >> base >> sales;

  newSalary = base + (sales * 0.15);

  cout << "TOTAL = R$ " << fixed << setprecision(2) << newSalary << endl;

  return 0;
}
