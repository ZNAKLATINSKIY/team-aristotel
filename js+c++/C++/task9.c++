#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int num;
    int one_num, two_num, three_num;
    int result;

    cout << "Введите трёхзначное число: ";
    cin >> num;

    one_num = floor(num / 100);
    two_num = floor((num % 100) / 10);
    three_num = floor(num % 10);

    result = three_num*100 + two_num*10 + one_num;
    cout << result;

    return 0;
}