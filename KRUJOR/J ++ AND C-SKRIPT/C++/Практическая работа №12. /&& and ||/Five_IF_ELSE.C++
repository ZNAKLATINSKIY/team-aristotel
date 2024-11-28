#include <iostream>
#include <string>

using namespace std;

    // 5. Запросить координаты точки (x, Y) 
    // и определить номер четверти, 
    // в которую попала эта точка. 
    // Необходимо учесть случаи попадания точки
    // на оси X или Y или в начало координат.


    int main()
        {
            int X;
            int Y;
            cout << "X";
            cin >> X;
            cout << "Y";
            cin >> Y;
            if (X == 0 && Y == 0) {
                cout << "We're standing still, sir!";
            } else if (X == 0) {
               cout << "We are standing on the X-axis!";
            } else if (Y == 0) {
               cout << "We are standing on the Y axis!";
            } else if (X > 0 && Y > 0) {
               cout << "We are standing on the first quarter!";
            } else if (X < 0 && Y > 0) {
               cout << "We are standing in the second quarter!";
            } else if (X < 0 && Y < 0) {
               cout << "We are standing on the third quarter!";
            } else if (X > 0 && Y < 0) {
               cout << "We are standing on the fourth quarter!";
            } else {
                cout << "An error in the entered data, sir!";
            }
            
        }