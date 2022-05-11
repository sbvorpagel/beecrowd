#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  int emp;
  int hours;
  float salary;

  cin >> emp >> hours >> salary;

  cout << "NUMBER = " << emp << endl;
  cout << "SALARY = U$ " << fixed << setprecision(2) << hours * salary << endl;

  return 0;
}
