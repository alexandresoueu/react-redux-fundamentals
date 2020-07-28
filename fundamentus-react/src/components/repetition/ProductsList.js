import React from 'react'
import products from '../../data/products'
import './ProductsList.css'

function ProductsList(props) {
  const listProducts = products.map((item, i) => {
    return <tr key={item.id} className={i % 2 === 0 ? 'Pair' : 'Odd'}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>R$ {item.price.toFixed(2)}</td>
    </tr>
  })

  return (<div className='ProductsTable'>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {listProducts}
      </tbody>
    </table>
  </div>
  )
}

export default ProductsList
