#include <iomanip>
#include <iostream>
using namespace std;

int main() {

  double n1, n2, n3, n4, exam, average;

  cin >> n1 >> n2 >> n3 >> n4;

  average = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;

  cout << "Media: " << fixed << setprecision(1) << average << endl;

  if (average < 5) {
    cout << "Aluno reprovado." << endl;
    return 0;
  }

  if (average > 7) {
    cout << "Aluno aprovado." << endl;
    return 0;
  }

  cout << "Aluno em exame." << endl;
  cin >> exam;
  cout << "Nota do exame: " << fixed << setprecision(1) << exam << endl;
  exam = (exam + average) / 2;
  if (exam < 5) {
    cout << "Aluno reprovado." << endl;
  } else {
    cout << "Aluno aprovado." << endl;
  }
  cout << "Media final: " << fixed << setprecision(1) << exam << endl;

  return 0;
}
