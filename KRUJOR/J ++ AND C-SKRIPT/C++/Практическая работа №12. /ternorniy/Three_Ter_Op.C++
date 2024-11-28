#include <iostream>
#include <string>

using namespace std;

    // 3. Запросить у пользователя название планеты. 
    // Если пользователь ввел ≪Земля≫ или ≪земля≫, 
    // то вывести ≪Привет, землянин!≫, в остальных случаях вывести 
    // ≪Привет, инопланетянин!≫.

int main () 
    {
        string planet;

        cout << "Planet: ";
        cin >> planet;

        string result = (planet == "Earth" || planet == "earth") ? "Hello earthling!" : "Hello alien!";

        cout << result;
    }