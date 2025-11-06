def ex_three():
    course_times = {}
    students = {}
    roster = {}

    c = int(input("Введите кол-во курсов: "))
    for i in range(c):
        courses_data = input("Введите код курса, день, время начала и конца: ").split(' ')
        course_times[courses_data[0]] = (courses_data[1], courses_data[2], courses_data[3])
        roster[courses_data[0]] = set()
    
    
    s = int(input("Введите кол-во студентов: "))
    for i in range(s):
        FNF = input("Введите ФИО студента: ")
        students[FNF] = set()

        k = int(input("Сколько курсов выбрал студент: "))
        for i in range(k):
            code_course = input("Введите код курса: ")
            students[FNF].add(code_course)
            roster[code_course].add(FNF)

    q = int(input("Введите кол-во запросов: "))

    for i in range(q):
        quest = input("Пример запроса:\n1 - вывести курсы студента в алфавитном порядке\n2 - вывести количество и список студентов в алфавитном порядке по коду курса\n3 - Вывести все конфликтующие пары курсов у студента\n4 - вывести общие курсы двух студентов (пересечение множеств)\n5 - вывести n курсов с наибольшим числом студентов (по убыванию; при равенстве - по коду)\n6day - вывести множества свободных временных слотов среди уже существующих (все слоты этого дня, на которые не записан ни один студент)\nЗапрос: ")
        match quest:
            case '1':
                case_FNF = input("Введите ФИО студента: ")
                if case_FNF in students:
                    print(f"Студент записан на курсы {students[FNF]}")
                else:
                    print("Студента не существует.")
            case '2':
                case_code = input("Введите код курса: ")
                if case_code in roster:
                    print(f"На данный курс записаны следующие студенты: {roster[case_code]}\nИх общее количество: {len(roster[case_code])}")
                else:
                    print("Код не обнаружен.")
            case '3':
                case_FNF = input("Введите ФИО студента")
            case '4':
                case_FNF_one = input("Введите ФИО первого студента: ")
                case_FNF_two = input("Введите ФИО второго студента: ")
                if case_FNF_one in students and case_FNF_two in students:
                    if students[case_FNF_one] == students[case_FNF_two]:
                        print(f"Пересечение: {students[case_FNF_one]}")
                    else:
                        print("Пересечение отсутствует.")
                else:
                    print("Студент(ы) не обнаружены.")
            case '5':
                n = int(input("Введите значение n: "))
                