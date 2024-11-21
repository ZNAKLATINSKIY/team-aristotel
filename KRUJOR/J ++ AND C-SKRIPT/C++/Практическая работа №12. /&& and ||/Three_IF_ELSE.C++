#include <iostream>
#include <string>
#include <cmath>

using namespace std;

    // 3. Запросить у пользователя число и вывести его модуль 
    // (|7| = 7, |-7| = 7).


    int main()
        {
            int promt;
            int x_two;
            int x_five;
            cout << "Number";
            cin >> promt;
            if (promt < 0) {
                x_two = pow(promt, 2);
                x_five = pow(x_two, 0.5);
                cout << "This!"<< x_five;
            } else {
                cout << "Allride";
            }
        }