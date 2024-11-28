#include <iostream>
#include <string>

using namespace std;

    // 1. Запросить 2 числа и вывести большее из них.

int main () 
    {
        int One_Number;
        int Two_Number;
        int Result;

        cout << "The first number: ";
        cin >> One_Number;
        cout << "The second number: ";
        cin >> Two_Number;
        
        Result = (One_Number > Two_Number) ? One_Number : Two_Number;
        
        cout << "result: " << Result;
    }