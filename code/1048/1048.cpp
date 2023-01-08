#include <iostream>
#include <iomanip>
using namespace std;

int main() {

  double salary, percente;

  cin >> salary;

  if (salary <= 400.00) {
    percente = 15;
  } else if (salary <= 800.00) {
    percente = 12;
  } else if (salary <= 1200.00) {
    percente = 10;
  } else if (salary <= 2000.00) {
    percente = 7;
  } else {
    percente = 4;
  }

  cout << "Novo salario: " << fixed << setprecision(2) << salary * (1 + (percente/100)) << endl;
  cout << "Reajuste ganho: " << salary * (percente/100) << endl;
  cout << "Em percentual: " << fixed << setprecision(0)  << percente << " %" << endl;

  return 0;
}
