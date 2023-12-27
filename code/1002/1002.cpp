#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    double PI = 3.14159;
    double r;

    cin >> r;
    cout << "A=" << fixed << setprecision(4) << PI * r * r << endl;

    return 0;
}
