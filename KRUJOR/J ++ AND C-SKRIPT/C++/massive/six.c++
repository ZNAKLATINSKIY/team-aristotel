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
    int mench;
    for (int i = 1; i < razmer; i++) {
        if (arr[i] < mench) {
            mench = arr[i];
        }
    }
    cout << "Наименьший эллемент " << mench;
}
