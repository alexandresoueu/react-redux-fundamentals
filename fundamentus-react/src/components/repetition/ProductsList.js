import React from 'react'
import products from '../../data/products'

function ProductsList (props) {
  const listProducts = products.map(item => {
    return <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>R$ {item.price.toFixed(2)}</td>
    </tr>
  })

  return (<table>
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
  )
}

export default ProductsList
