#include <iostream>
using namespace std;

int main() {
    double number;
    cout << "������� �����: ";
    cin >> number;

    if (number > 0) {
        cout << "����� �������������";
    }
    else if (number < 0) {
        cout << "����� �������������";
    }
    else {
        cout << "����� ����� ����";
    }

    return 0;
}
