#include <iostream>
#include <vector>
using namespace std;


int main() {
    int razmer;
    cout << "Какого размера будет сам массив?: ";
    cin >> razmer;
    vector<int>arr(razmer);
    for (int i = 0; i < razmer; i++) {
        cout << "Введите " << i << " элемент массива: ";
        cin >> arr[i];
    }

    for (int i = 0; i < razmer / 2; i++) {
        int first = arr[i];
        arr[i] = arr[razmer - 1 - i];
        arr[razmer - 1 - i] = first;
    }
    
    for (int i = 0; i < razmer; i++) {
        cout << arr[i] << " ";
    }
}
