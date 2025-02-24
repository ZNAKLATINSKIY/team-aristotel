#include <iostream>
using namespace std;

int main() {
    int razmer;
    cout << "Какого размера будет сам массив?: ";
    cin >> razmer;
    int arr[razmer];
    int neg[razmer];
    for (int i = 0; i < razmer; i++) {
        cout << "Введите " << i << " элемент массива: ";
        cin >> arr[i];
    }
    for (int i = 0; i < razmer; i++) {
        if (arr[i] <= 0) {
            neg[i] = arr[i];
        } else {
            int invert = arr[i] * -1;
            neg[i] = invert;
        }
    }
    for (int i = 0; i < razmer; i++) {
        cout << neg[i] << " ";
    }
}
    