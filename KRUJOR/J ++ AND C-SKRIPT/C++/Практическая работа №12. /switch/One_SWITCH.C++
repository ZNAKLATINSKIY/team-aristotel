#include <iostream>
#include <string>

using namespace std;

    // 1. Запросить у пользователя номер месяца 
    // и вывести на экран его название.

int main ()
    {
        int promt;
        cout << "The number of the month you need?";
        cin >> promt;

        switch (promt) {
            case 1:
                cout << "You need January!";
            break;
            case 2:
                cout << "You need February!";
            break;
            case 3:
                cout << "You need March!";
            break;
            case 4:
                cout << "You need April!";
            break;
            case 5:
                cout << "You need May!";
            break;
            case 6:
                cout << "You need June!";
            break;
            case 7:
                cout << "You need July!";
            break;
            case 8:
                cout << "You need August!";
            break;
            case 9:
                cout << "You need September!";
            break;
            case 10:
                cout << "You need October!";
            break;
            case 11:
                cout << "You need November!";
            break;
            case 12:
                cout << "You need December!";
            break;
            default:
                cout << "You entered it incorrectly! Enter in numbers! Or there is no such month...";
        }
    }