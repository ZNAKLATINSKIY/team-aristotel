#include <iostream>
#include <string>

using namespace std;

int main()
{
    int year_user;
    int year;
    year = 2024;
    
    cout << "Введите год Вашего рождения: ";
    cin >> year_user;
    
    int years_user;
    years_user = year - year_user;
    
    cout << "Вам " << years_user << " лет!";
}