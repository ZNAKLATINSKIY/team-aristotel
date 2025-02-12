#include <iostream>
#include <locale>
#include <vector>
using namespace std;

void ex_1() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;

  int array[n];
  cout << "Введите элементы массива: " << endl;
  for (int i = 0; i < n; i++) {
    cin >> array[i];
  }

  cout << "Элементы массива: ";
  for (int i = 0; i < n; i++) {
    cout << array[i] << " ";
  }
  cout << endl;

  int positive = 0;
  int negative = 0;
  int chet = 0;
  int ne_chet = 0;
  int zero = 0;

  for (int i = 0; i < n; i++) {
    if (array[i] > 0) {
      positive++;
    } else if (array[i] < 0) {
      negative++;
    }
    if (array[i] % 2 == 0) {
      chet++;
    } else if (array[i] % 2 != 0) {
      ne_chet++;
    }
    if (array[i] == 0) {
      zero++;
    }
  }

  // Вывод
  cout << "Положительных чисел в массиве: " << positive << endl;
  cout << "Отрицательных чисел в массиве: " << negative << endl;
  cout << "Чётных чисел в массиве: " << chet << endl;
  cout << "Нулей в массиве: " << zero << endl;
}

void ex_2() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;

  int array[n];
  cout << "Введите элементы массива: " << endl;
  for (int i = 0; i < n; i++) {
    cout << "Элемент " << i << ": ";
    cin >> array[i];
  }

  cout << "Элементы массива: ";
  for (int i = 0; i < n; i++) {
    cout << array[i] << " ";
  }
  cout << endl;

  int negative_n = 0;
  for (int i = 0; i < n; i++) {
    if (array[i] < 0) {
      negative_n+=1;
    }
  }
  if (negative_n == 0) {
    cout << "Отрицательных чисел в массиве нет." << endl;
  } else {

    int negativeArray[negative_n];
    int count = 0;

    for (int i = 0; i < n; i++) {
      if (array[i] < 0) {
         negativeArray[count] = array[i];
         count++;
      }
    }
    cout << "Массив, состоящий из отрицательных элементов первого: ";
    for (int i = 0; i < negative_n; i++) {
      cout << negativeArray[i] << " ";
    }
  }
}

void ex_3() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;


  vector<int> array(n);

  cout << "Введите элементы массива: " << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс элемента: " << i << endl;
    cout << "Элемент: ";
    cin >> array[i];
  }

  cout << "Элементы массива: ";
  for (int i = 0; i < n; i++) {
    cout << array[i] << " ";
  }


  const int box = array[0];
  array[0] = array[n-1];
  array[n-1] = box;

  cout << "Перезаписанные элементы массива: " << endl;;
  for (int i = 0; i < n; i++) {
    cout << array[i] << " ";
  }
}

void ex_4() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;

  vector<int> array(n);
  cout << "Введите элементы массива: " << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс элемента: " << i << endl;
    cout << "Элемент: ";
    cin >> array[i];
  }

  cout << "Элементы массива: ";
  for (int i = 0; i < n; i++) {
    cout << array[i] << " ";
  }

  int elem1, elem2;
  cout << "Введите элементы массива, которые вы хотите поменять местами" << endl;
  cout << "Первый элемент: ";
  cin >> elem1;
  cout << "Второй элемент: ";
  cin >> elem2;

  for (int i = 0; i < n; i++) {
    if (array[i] == elem1) {
      array[i] = elem2;
    }
    else if (array[i] == elem2) {
      array[i] = elem1;
    }
  }

  cout << "Обновлённый массив: " << endl;
  for (int i = 0; i < n; i++) {
    cout << array[i] << " ";
  }
}

void ex_5() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;

  vector<int> array(n);
  cout << "Введите элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс элемента - " << i << " ";
    cout << "Элемент: ";
    cin >> array[i];
  }

  cout << endl;
  cout << "Элементы массива." << endl;
  cout << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << array[i] << endl;
  }

  cout << endl;
  cout << "Элементы массива в обратном порядке." << endl;
  cout << endl;
  for (int i = n-1; i >= 0; i--) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << array[i] << endl;
  }
}

void ex_6() {
  int n;
  cout << "Введите количество элементов в массиве: ";
  cin >> n;

  vector<int> array(n);
  cout << endl;
  cout << "Введите элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << endl;
    cin >> array[i];
  }

  cout << endl;
  cout << "Элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << array[i] << endl;
  }

  int min = array[0];
  for (int i = 0; i < n; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  cout << "Минимальное значение массива: " << min << endl;
}

void ex_7() {
  int n;
  cout << "Введите количество элементов в массиве: ";
  cin >> n;

  vector<int> array(n);
  cout << endl;
  cout << "Введите элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << endl;
    cin >> array[i];
  }

  cout << endl;
  cout << "Элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << array[i] << endl;
  }

  int max = array[0];
  for (int i = 0; i < n; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  cout << "Максимальное значение массива: " << max << endl;
}

void ex_8() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;

  vector<int> array(n);
  cout << endl;
  cout << "Введите элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: ";
    cin >> array[i];
  }

  cout << endl;
  cout << "Элементы массива:" << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << array[i] << endl;
  }

  int min = array[0];
  for (int i = 0; i < n; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  cout << "Минимальное значение массива: " << min << endl;

  int max = array[0];
  for (int i = 0; i < n; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  cout << "Максимальное значение массива: " << max << endl;

  cout << "Заменяю значения..." << endl;
  for (int i = 0; i < n; i++) {
    if (array[i] == min) {
      array[i] = max;
    }
    else if (array[i] == max) {
      array[i] = min;
    }
  }

  cout << endl;
  cout << "Обновлённый массив: " << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс элемента - " << i << " ";
    cout << "Элемент массива: " << array[i] << endl;
  }
}

auto array() {
  return arr;
}

void ex_9() {
  int n;
  cout << "Введите размер массива: ";
  cin >> n;

  vector<int> array(n);
  cout << endl;
  cout << "Введите элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << endl;
    cin >> array[i];
  }

  cout << endl;
  cout << "Элементы массива." << endl;
  for (int i = 0; i < n; i++) {
    cout << "Индекс - " << i << " ";
    cout << "Элемент: " << array[i] << endl;
  }

  int element;
  cout << "Введите элемент массива, который желаете удалить: ";
  cin >> element;


  // понять, как работает
  for (int i = element; i < n-1; i++) {
    array[i] = array[i + 1];
  }


}


int main() {
  setlocale(LC_ALL, "");
  ex_5();
  return 0;
}