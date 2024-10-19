#include <iostream>
#include <string>

using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    
    int i;
    cout << "Введите длину стороны квадрата: ";
    cin >> i;
    
    cout << "Периметр квадрата: " << i*4;
    
}