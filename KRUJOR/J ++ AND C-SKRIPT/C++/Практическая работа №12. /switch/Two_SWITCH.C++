#include <iostream>
#include <string>

using namespace std;

    // 2. Реализовать калькулятор. Пользователь вводит 2 числа и
    // знак (+ - * /). В зависимости от введенного знака решить
    // пример и вывести результат.

int main () 
    {
        int One_Number;
        int Two_Number;
        char Operator;
        int res1;
        int res2;
        int res3;
        int res4;

        cout << "The first number: ";
        cin >> One_Number;
        cout << "The second number: ";
        cin >> Two_Number;
        cout << "The operator you need is: ";
        cin >> Operator;

        switch (Operator) {
        case '+': 
            res1 = One_Number + Two_Number;
            cout << "Your result = " << res1;
        break;
        case '-': 
            res2 = One_Number - Two_Number;
            cout << "Your result = " << res2;
        break;
        case '*': 
            res3 = One_Number * Two_Number;
            cout << "Your result = " << res3;
        break;
        case '/': 
            res4 = One_Number / Two_Number;
            cout << "Your result = " << res4;
        break;
        default:
            cout << "You entered it wrong!";
    }


    }