#include <cmath>
#include <iostream>
using namespace std;

int getBigger(int a, int b) { return (a + b + abs(a - b)) / 2; }

int main() {

  int A, B, C;

  cin >> A >> B >> C;

  cout << getBigger(getBigger(A, B), C) << " eh o maior" << endl;

  return 0;
}
