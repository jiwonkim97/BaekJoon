#include <iostream>

using namespace std;

int main() {
    int N = 0;
    cin >> N;
    int *array = new int[N];

    for (int i = 0; i < N; i++) {
        cin >> array[i];
    }

    for (int i = 0; i < N; i++) {
        cout << array[i] << '\n';
    }
    delete[] array;
    return 0;
}
