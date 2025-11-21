import React, {useState, useEffect} from 'react'

function Exten({ drink, timee, setDrink, setTimee, season, setSeason }) {
    function zero() {
        setDrink('')
        setTimee('')
        setSeason('')
    }
    return (
        <div style={{
            width: '400px',
            height: '600px',
            boxShadow: '0 0 15px 15px black',
        }}>
            <br></br>
            Ваш любимый напиток?
            <div>
                <label>
                    <input 
                    type="radio"
                    name="drink"
                    value="Чай"
                    checked={drink === "Чай"}
                    onChange={(e) => setDrink(e.target.value)}
                    />
                    Чай
                </label>

                <label>
                    <input 
                    type="radio"
                    name="drink"
                    value="Кофе"
                    checked={drink === "Кофе"}
                    onChange={(e) => setDrink(e.target.value)}
                    />
                    Кофе
                </label>

                <label>
                    <input 
                    type="radio"
                    name="drink"
                    value="Сок"
                    checked={drink === "Сок"}
                    onChange={(e) => setDrink(e.target.value)}
                    />
                    Сок
                </label>
            </div>
            <br></br>
            Какое у вас любимое время дня?  
            <div>
                <label>
                    <input 
                    type="radio"
                    name="time"
                    value="Утро"
                    checked={timee === "Утро"}
                    onChange={(e) => setTimee(e.target.value)}
                    />
                    Утро
                </label>

                <label>
                    <input 
                    type="radio"
                    name="time"
                    value="День"
                    checked={timee === "День"}
                    onChange={(e) => setTimee(e.target.value)}
                    />
                    День
                </label>

                <label>
                    <input 
                    type="radio"
                    name="time"
                    value="Вечер"
                    checked={timee === "Вечер"}
                    onChange={(e) => setTimee(e.target.value)}
                    />
                    Вечер
                </label>
            </div>
            <br></br>
            Любимое время года?
            <div>
                <label>
                    <input 
                    type="radio"
                    name="season"
                    value="Весна"
                    checked={season === "Весна"}
                    onChange={(e) => setSeason(e.target.value)}
                    />
                    Утро
                </label>

                <label>
                    <input 
                    type="radio"
                    name="season"
                    value="Лето"
                    checked={season === "Лето"}
                    onChange={(e) => setSeason(e.target.value)}
                    />
                    День
                </label>

                <label>
                    <input 
                    type="radio"
                    name="season"
                    value="Осень"
                    checked={season === "Осень"}
                    onChange={(e) => setSeason(e.target.value)}
                    />
                    Вечер
                </label>

                <label>
                    <input 
                    type="radio"
                    name="season"
                    value="Зима"
                    checked={season === "Зима"}
                    onChange={(e) => setSeason(e.target.value)}
                    />
                    Вечер
                </label>
            </div>

            {drink && timee && season 
                        
            ? 
        
            <>
                <p>
                    Результаты:
                    <br></br>
                    Любимое время года: {season}
                    <br></br>
                    Любимое время дня: {timee}
                    <br></br>
                    Любимый напиток: {drink}
                </p>
                <button onClick={() => zero()}>Повторить тест</button>
            </>

            :

            <>
                <p>Все радио-кнопки должны быть нажаты</p>
            </>
            
            }
        </div>
    )
}

export default Exten