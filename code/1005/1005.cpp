#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    double a, b;
    cin >> a >> b;
    cout << fixed << setprecision(5) << "MEDIA = " << (a * 3.5 + b * 7.5) / 11 << endl;
    return 0;
}
