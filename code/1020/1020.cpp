#include <iostream>
using namespace std;

int main() {

  int n, years, months, days;

  cin >> n;

  years = n / 365;

  months = (n - (years * 365)) / 30;

  days = n - (years * 365) - (months * 30);

  cout << years << " ano(s)" << endl
       << months << " mes(es)" << endl
       << days << " dia(s)" << endl;

  return 0;
}
