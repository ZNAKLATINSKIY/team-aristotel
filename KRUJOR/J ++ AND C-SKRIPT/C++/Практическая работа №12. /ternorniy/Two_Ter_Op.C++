#include <iostream>
#include <string>

using namespace std;

//    2. Запросить 1 число и проверить, оно кратно 5 или нет.

int main () 
    {
        int Number;

        cout << "The number: ";
        cin >> Number;
        
        string Result = (Number == 5) ? "The number is a multiple of 5" : "The number is not a multiple of 5";
        
        cout << "result: " << Result;
    }