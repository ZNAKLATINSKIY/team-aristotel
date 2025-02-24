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
    int boll = arr[0];
    for (int i = 1; i < razmer; i++) {
        if (arr[i] > boll) {
            boll = arr[i];
        }
    }
    int znach;
    cout << "Какое значение хотите внести в массив? ";
    cin >> znach;
    int posle;
    cout << "После какого элемента хотите добавить? ";
    cin >> posle;
    razmer++;
    for (int i = razmer; i > posle; i--) {
          arr[i] = arr[i - 1];
    }
    for (int i = 0; i < razmer; i++) {
        cout << arr[i] << " ";
    }
}
