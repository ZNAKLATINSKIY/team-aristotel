// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Настройки Firebase (замените на свои!)
const firebaseConfig = {
  apiKey: "AIzaSyDOdnFArL8YfCq9O3895NLUcppoQQ7xnSA",
  authDomain: "students-a35e0.firebaseapp.com",
  projectId: "students-a35e0",
  storageBucket: "students-a35e0.firebasestorage.app",
  messagingSenderId: "878333260474",
  appId: "1:878333260474:web:7205cd5e20693fed5b4883",
  measurementId: "G-ZXCRBKGFLQ"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const studentsCol = collection(db, "students");

// Класс Student
class Student {
  #name;
  #grades;
  #id;

  constructor(id, name, grades = []) {
    this.#id = id;
    this.#name = name;
    this.#grades = grades;
  }

  addGrade(grade) {
    this.#grades.push(grade);
    updateDoc(doc(db, "students", this.#id), { grades: this.#grades });
  }

  getAverage() {
    const sum = this.#grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.#grades.length;
  }

  render(parent) {
    const div = document.createElement("div");
    div.classList.add("student");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("student-name");
    nameDiv.textContent = this.#name;

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("student-actions");

    const addGradeBtn = document.createElement("button");
    addGradeBtn.classList.add("add-grade-btn");
    addGradeBtn.textContent = "Добавить оценку";
    addGradeBtn.addEventListener("click", () => this.promptGrade());

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Удалить";
    deleteBtn.addEventListener("click", () => this.deleteStudent());

    actionsDiv.appendChild(addGradeBtn);
    actionsDiv.appendChild(deleteBtn);

    const gradesDiv = document.createElement("div");
    gradesDiv.classList.add("student-grades");
    gradesDiv.textContent = "Оценки: " + (this.#grades.length > 0 ? this.#grades.join(", ") : "Нет оценок");

    div.appendChild(nameDiv);
    div.appendChild(actionsDiv);
    div.appendChild(gradesDiv);

    parent.appendChild(div);
  }

  promptGrade() {
    const grade = prompt("Введите кол-во баллов (от 0 до 100):");
    if (grade && !isNaN(grade) && grade >= 0 && grade <= 100) {
      this.addGrade(Number(grade));
    } else {
      alert("Введите корректную оценку.");
    }
  }

  async deleteStudent() {
    const confirmDelete = confirm(`Вы уверены, что хотите удалить студента ${this.#name}?`);
    if (confirmDelete) {
      await deleteDoc(doc(db, "students", this.#id));
    }
  }
}

// Работа с DOM и Firebase
const studentsDiv = document.getElementById("students");
const form = document.getElementById("studentForm");
const input = document.getElementById("studentName");

// Добавление нового студента
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = input.value.trim();
  if (!name) return;

  // Добавление документа в Firebase
  await addDoc(studentsCol, { name, grades: [] });
  input.value = "";
});

// Вывод студентов
onSnapshot(studentsCol, (snapshot) => {
  studentsDiv.innerHTML = "";
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const student = new Student(docSnap.id, data.name, data.grades || []);
    student.render(studentsDiv);
  });
});
