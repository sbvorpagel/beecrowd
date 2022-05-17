#include <climits>
#include <iostream>
using namespace std;

int main() {

  int numbers[3], i, smaller, smaller_index, aux_arr[3], sorted_arr[3], j;

  for (i = 0; i < 3; i++) {
    cin >> numbers[i];
    aux_arr[i] = numbers[i];
  }

  for (j = 0; j < 3; j++) {
    smaller = INT_MAX;

    for (i = 0; i < 3; i++) {
      if (aux_arr[i] < smaller) {
        smaller = aux_arr[i];
        smaller_index = i;
      }
    }

    sorted_arr[j] = smaller;
    aux_arr[smaller_index] = INT_MAX;
  }

  for (i = 0; i < 3; i++) {
    cout << sorted_arr[i] << endl;
  }

  cout << endl;

  for (i = 0; i < 3; i++) {
    cout << numbers[i] << endl;
  }

  return 0;
}
