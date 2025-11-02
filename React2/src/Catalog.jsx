import React from 'react'

function Catalog( { data, cat } ) {
  return (
    <div>
        <h1>{cat}</h1>
      {data.filter(item => item.category == cat).map(elem => {
          return <div key={elem.id}>
            <h2>{elem.title}</h2>
            <h3>{elem.price}</h3>
          </div>
        })}
    </div>
  )
}
export default Catalog
