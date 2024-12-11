#include <iostream>
#include <string>

using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    
    int i;
    cout << "Введите радиус окружности: ";
    cin >> i;
    
    cout << "Площадь окружности: " << 3.14*(i*=i);
    
}