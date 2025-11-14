import React, { useState } from 'react';

function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Поиск товара</h3>
      <input
        placeholder="Поиск по названию..."
        value={searchTerm}
        type="text"
        onChange={e => setSearchTerm(e.target.value)}
      />

      <h3>Результаты поиска</h3>
      {filteredData.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {filteredData.map((item, index) => (
            <li>
              {item.title} — {item.price} — {item.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
