#include <iostream>
#include <string>

using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    
    int gb;
    cout << "Введите объём флешки в гигабайтах: ";
    cin >> gb;
    
    cout << "820мб поместятся на флешке " << (gb*1024)/820 << " раз";
}