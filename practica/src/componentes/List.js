import React from 'react'

export default function List() {
    const PRODUCTS = [
        { tittle: 'Col', isFruit: false, id: 1},
        { tittle: 'Ajo', isFruit: false, id: 2},
        { tittle: 'Manzana', isFruit: true, id: 3},
    ];

    const LISTITEMS = PRODUCTS.map(product =>
        <li key={product.id} style={{color: product.isFruit ? 'red' : 'darkgreen'}}>
            {product.tittle}
        </li>
    );
  return (
    <div>
        <h1>Lista de productos</h1>
        <ul>{LISTITEMS}</ul>
    </div>
  )
}
