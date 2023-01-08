#include <iostream>
using namespace std;

int main() {

  int a, b;
  
  cin >> a >> b;
  
  cout << "O JOGO DUROU " << (a<b ? b-a : 24-a+b) << " HORA(S)" << endl;  

  return 0;
}
