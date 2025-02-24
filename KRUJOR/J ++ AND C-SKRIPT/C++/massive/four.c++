#include <iostream>
using namespace std;

int main() {
    int razmer;
    int elOne;
    int elTwo;
    cout << "Какого размера будет сам массив?: ";
    cin >> razmer;
    int *arr = new int[razmer];
    for (int i = 0; i < razmer; i++) {
        cout << "Введите " << i << " элемент массива: ";
        cin >> arr[i];
    }
    cout << "Какой элемент вы хотите заменить на другой? Первый элемент: ";
    cin >> elOne;
    cout << "Какой элемент вы хотите заменить на другой? Второй элемент: ";
    cin >> elTwo;
    if (elOne, elTwo > razmer) {
        cout << "Такого элемента нет ";
    } else {
        int one = arr[elOne];
    
    arr[elOne] = arr[elTwo];
    arr[elTwo] = one;
    
    for (int i = 0; i < razmer; i++) {
        cout << arr[i] << " ";
    }
    }
    
    
}
    