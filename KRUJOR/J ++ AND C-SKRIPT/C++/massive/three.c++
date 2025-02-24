#include <iostream>
using namespace std;

int main() {
    int razmer;
    cout << "Какого размера будет сам массив?: ";
    cin >> razmer;
    int *arr = new int[razmer];
    for (int i = 0; i < razmer; i++) {
        cout << "Введите " << i << " элемент массива: ";
        cin >> arr[i];
    }
    
    int one = arr[0];
    
    arr[0] = arr[razmer - 1];
    arr[razmer - 1] = one;
    
    for (int i = 0; i < razmer; i++) {
        cout << arr[i] << " ";
    }
}
    