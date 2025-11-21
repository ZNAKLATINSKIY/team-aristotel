import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exten from './Exten';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Кликов: ${count}`;
  }, [count]);

  const [time, setTime] = useState(10);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
    else {
      alert("Время вышло!")
    }
  }, [time]);

  const [Color, setColor] = useState('white');
  const colors = ['white', 'lightblue', 'lightgreen', 'lightcoral'];

  useEffect(() => {
      const ColorRandom = Math.floor(Math.random() * colors.length);
      setColor(colors[ColorRandom]);
      document.body.style.backgroundColor = Color
  }, [Color]);

  const [inputName, setinputName] = useState('');

  useEffect(() => {
    if (inputName) {
      console.log(`Привет, ${inputName}`);
    } else {
      console.log("Введите Ваше имя!")
    }
  })

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem }]);
      setNewItem('');
    }
  };
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addItem();
  };

  const [lcount, setLcount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('clickCount');
    if (saved !== null) setLcount(parseInt(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('clickCount', lcount.toString());
  }, [lcount]);

  const increment = () => {
    setLcount(prev => prev + 1)
  }

  
  const [sumCheck, setSumCheck] = useState(0);
  const [teeCheck, setTeeCheck] = useState(0);


  const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша', 'Киви'];
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState('');
  useEffect(() => {
    setFiltered(fruits.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  const weatherData = {
    'Москва': { temp: -5, condition: 'Снег' },
    'Сочи': { temp: 15, condition: 'Солнечно' },
    'Екатеринбург': { temp: -10, condition: 'Облачно' }
  };

  
  const [cityWeather, SetCityWeather] = useState('');
  const [tempWeather, setTempWeather] = useState(() => {
    return localStorage.getItem('tempWeather' || 0);
  });
  const [condition, setCondition] = useState(() => {
    return localStorage.getItem('condition' || '');
  });

  useEffect(() => {
    if (weatherData[cityWeather]) {
      setTempWeather(weatherData[cityWeather].temp);
      setCondition(weatherData[cityWeather].condition);
  }
  }, [cityWeather]);

  useEffect(() => {
    localStorage.setItem("tempWeather", tempWeather);
    localStorage.setItem("condition", condition);
  }, [tempWeather, condition]);


  
  const [drink, setDrink] = useState('');
  const [timee, setTimee] = useState('');
  const [season, setSeason] = useState('');
  return (
    <>
      <input
      value={inputName}
      onChange={(e) => setinputName(e.target.value)}
      />

      <h2>Список покупок</h2>

      <input
        type="text"
        placeholder="Введите товар..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button onClick={addItem}>Добавить</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => deleteItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>

    <button onClick={increment}>Добавить к счётчику</button>


    <p>Инпут для суммы счёта</p>
    <input
    value={sumCheck}
    onChange={(e) => setSumCheck(e.target.value)}
    />
    <select onChange={(e) => setTeeCheck(e.target.value)} name="select" id="">
      <option value="15">15%</option>
      <option value="25">25%</option>
      <option value="50">50%</option>
    </select>
    <p>Общая сумма: {sumCheck} Сумма с чаевыми: {parseInt(sumCheck) + parseInt(sumCheck / 100 * teeCheck)}</p>

    <input
    onChange={(e) => setSearch(e.target.value)} />
    <p> {filtered.length > 0 ? filtered.join(' ') : "Ничего не найдено"} </p>

    <div>
      <select onChange={(e) => SetCityWeather(e.target.value)} name="" id="">
        <option value=""></option>
        <option value="Москва">Москва</option>
        <option value="Сочи">Сочи</option>
        <option value="Екатеринбург">Екатеринбург</option>
      </select>
      <p>Температура города: {tempWeather} Погода: {condition}</p>
    </div>
    
    <Exten drink={drink} setDrink={setDrink} timee={timee} setTimee={setTimee} season={season} setSeason={setSeason} />
    </>
  )
}

export default App