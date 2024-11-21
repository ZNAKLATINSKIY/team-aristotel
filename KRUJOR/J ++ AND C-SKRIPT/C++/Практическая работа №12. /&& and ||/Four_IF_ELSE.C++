#include <iostream>
#include <string>
#include <cmath>

using namespace std;

    // 3. Запросить у пользователя число и вывести его модуль 
    // (|7| = 7, |-7| = 7).


    int main()
        {
            int hour;
            int minute;
            int seconds;
            cout << "hour";
            cin >> hour;
            cout << "minute";
            cin >> minute;
            cout << "seconds";
            cin >> seconds;
            if (hour > 0 && hour < 24) {
                if (minute > 0 && minute < 60) {
                    if (seconds > 0 && seconds < 60) {
                        cout << "Good time!";
                    } else {
                        cout << "Not Good seconds";
                    }
                } else {
                    cout << "Not Good minute";
                }
            } else {
                cout << "Not Good hour";
            }   
        }