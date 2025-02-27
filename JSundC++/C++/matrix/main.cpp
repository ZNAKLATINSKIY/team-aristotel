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

void ex_2() {
    int n;
    cout << "Введите количество массивов в массиве: ";
    cin >> n;
    int elements;
    cout << "Введите количество элементов в одном массиве: ";
    cin >> elements;

    
    vector<vector<int>> matrix(elements, vector<int>(n));
    string matrixStr = "";
    cout << endl << endl;
    
    cout << "Введите элементы матрицы." << endl;
    cout << "*****************************" << endl;
    for (int i = 0; i < elements; i++) {
        for (int j = 0; j < n; j++) {
            cout << "Индекс массива: " << j << endl;
            cout << "Индекс элемента: " << i << endl;
            cout << "Элемент: ";
            cin >> matrix[i][j];
        }
    }
    
    for (int i = 0; i < elements; i++) {
        for (int j = 0; j < n; j++) {
            matrixStr += to_string(matrix[i][j]) + " ";
        }
        matrixStr += "\n";
    }
    cout << "Матрица: " << endl << matrixStr;
    
    
    int n_stroka;
    cout << "Введите индекс строки, которую желаете заменить на 0 - ";
    cin >> n_stroka;
    
    for (int i = 0; i < elements + 1; i++) {
        for (int j = 0; j < n; j++); {
            matrix[n_stroka][i] = 0;
        }
    }
    
    string newMatrixStr = "";
    for (int i = 0; i < elements; i++) {
        for (int j = 0; j < n; j++) {
            newMatrixStr += to_string(matrix[i][j]) + " ";
        }
        newMatrixStr += "\n";
    }
    
    cout << "Обновлённая матрица: " << endl << newMatrixStr;
    
}

int main()
{
	setlocale(LC_ALL, "ru");

	return 0;
}
