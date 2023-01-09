#include <iostream>
#include <iomanip>
using namespace std;

void print(double value) {
 cout << "R$ " << fixed << setprecision(2) << value << endl; 
}

int main() {

  double salary, tax28, tax18, tax8;

  cin >> salary;

  if (salary > 4500.00) {
    tax28 = salary-4500.00;
    tax18 = salary - tax28 - 3000.00;
    tax8 = salary - tax28 - tax18 - 2000.00;
    print(tax28*0.28+tax18*0.18+tax8*0.08);
  } else if (salary >= 3000.00) {
    tax18 = salary - 3000.00;
    tax8 = salary - tax18 - 2000.00;
    print(tax18*0.18+tax8*0.08);
  } else if (salary >= 2000.00) {
    tax8 = salary - 2000.00;
    print(tax8*0.08);
  } else { 
    cout << "Isento" << endl;
  }  
  return 0;
}
