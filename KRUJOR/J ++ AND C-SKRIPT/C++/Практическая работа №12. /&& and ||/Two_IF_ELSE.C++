#include <iostream>
#include <string>

using namespace std;

    // 2. Запросить у пользователя его возраст и проверить
    // корректность введенных данных (0–120 лет).


    int main()
        {
            int age;
            cout << "You age: ";
            cin >> age;
            if (age > 0 && age < 120) {
                cout<<"Good age!";
            } else {
                cout<<"You lie...";
            }
        }