import React, { useState } from 'react';
import Rating from './Rating';
import Calculate from './Calculate';
function Catalog({ data }) {
  const [cat, setCat] = useState("Все категории");
  const [isOpen, setIsOpen] = useState(false);  
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const categories = ["Все категории", ...new Set(data.map(item => item.category))];

  const visibleProducts = cat === "Все категории"
      ? data : data.filter(item => item.category === cat);
  
  const buttonClick = (product) => {
    setSelectedProduct(product)
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <h1>{cat}</h1>

      {categories.map(c => (
        <button key={c} onClick={() => setCat(c)}>
          {c}
        </button>
      ))}

      <ul>
        {visibleProducts.map(p => (
          <li key={p.id}>
            {p.title}
            <button onClick={() => buttonClick(p)} style={{margin: '0 0 0 20px'}}>
              Подробнее о {p.title.slice(0, 4) + '...'}
            </button>
            <Calculate price={Math.round(p.price)}/>
            <Rating rate={Math.round(p.rating.rate)}/>
          </li>
        ))}

      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '20px' }}>
            {isOpen && selectedProduct 
                ?
                <div style={{
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    margin: '20px',
                    border: '1px solid black'
                    }}>
                    <p>{selectedProduct.title}</p>
                    <p>{selectedProduct.description}</p>
                    <h2>{selectedProduct.price}</h2>
                </div>
                : 
                null
            }
        </div>
    </div>  
  );
}

export default Catalog;
