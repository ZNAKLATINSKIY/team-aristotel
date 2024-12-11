#include <iostream>
#include <string>

using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    
    int s;
    int t;
    int v;
    
    cout << "Введите расстояние в км, которое Вам нужно преодолеть: ";
    cin >> s;
    
    cout << "Введите время в часах, за которое Вам нужно проехать дорогу: ";
    cin >> t;
    
    v = s/t;
    cout << "Вам нужно двигаться со скоростью " << v << "км/ч";
    
}