#include <iostream>
#include <string>

using namespace std;

    // 1. Запросить у пользователя число и определить,
    // оно положительное, отрицательное или ноль.


    int main()
        {
            int number;
            cout << "SUMMA: ";
            cin >> number;
            if (number == 0) {
                cout<<"ZERO!";
            } 
            else if (number < 0) {
                cout<<"NEGATIVE";
            } 
            else {
                cout<<"POSITIVE";
            }
        }