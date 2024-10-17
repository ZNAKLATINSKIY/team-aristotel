#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int wallet;
    int schokolade;
    cout << "Введите сумму денег в Вашем кошельке: " << endl;
    cin >> wallet;
    
    cout << "Введите цену на шоколад: " << endl;
    cin >> schokolade;
    
    if (wallet < schokolade) {
        int ostatok = schokolade - wallet;
        cout << "Вам не хватает: " << ostatok << endl;
    } else {
        int schokolade_count = wallet / schokolade;
        int ostatok = wallet % schokolade;
        cout << "Вы можете купить данное количество шоколадок: " << schokolade_count << endl;
        cout << "Сдача: " << ostatok;
    }
    
}