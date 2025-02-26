#include <iostream>
#include <vector>
#include <string>
#include <locale>
using namespace std;

void ex_1() {
	int n;
	cout << "Введите количество элементов в одном массиве: ";
	cin >> n;
	cout << endl;

	cout << endl;
	int elementser;
	cout << "Введите количество массивов массива: ";
	cin >> elementser;


	vector<vector<int>> matrix(n, vector<int>(elementser));
	string matrixStr = "";
	cout << endl;

	cout << "Введите элементы." << endl;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < elementser; j++) {
			cout << "Индекс: " << i << " Элемент: " << endl;
			cin >> matrix[i][j];
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < elementser; j++) {
			matrixStr += to_string(matrix[i][j]) + " ";
		}
		matrixStr += "\n";
	}

	cout << endl;
	cout << matrixStr;


	int stolb;
	cout << "Введите столбец, элементы которого Вы желаете изменить на нули: ";
	cin >> stolb;
	cout << endl << endl;

	string newMatrixStr = "";
	for (int i = 0; i < elementser+1; i++) {
		matrix[i][stolb] = 0;
	}
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < elementser; j++) {
			newMatrixStr += to_string(matrix[i][j]) + " ";
		}
		newMatrixStr += "\n";
	}

	cout << endl;
	cout << newMatrixStr;
}

int main()
{
	setlocale(LC_ALL, "ru");

	return 0;
}