#include <iostream>
#include <string>


using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    
    int user_i;
    cout << "Введите количество долларов: ";
    cin >> user_i;
    
    float euro = user_i * 0.85;
    cout << "Перевёл в евро: " << euro;
}