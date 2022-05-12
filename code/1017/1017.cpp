#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  int time, average;

  cin >> time >> average;

  cout << fixed << setprecision(3) << time * average / 12.0 << endl;

  return 0;
}
