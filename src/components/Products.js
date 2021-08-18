import "../App.css"
import Product from "./Product"
import { useState } from 'react'

const Products = () => {

    let [allProducts, setDeleteProduct]= useState([

        {
            title: 'Red Bull',
            price: 1.70,
            id: 1,
            BB: '7.10.21'
        },
        {
            title: 'Blue Bull',
            price: 1.70,
            id: 2,
            BB: '7.10.21'
        },
        {
            title: 'Red Bull',
            price: 1.70,
            id: 3,
            BB: '7.10.21'
        }
    ])

    const onDelete = (id) => {
        setDeleteProduct(allProducts.filter((product) => product.id !== id))
    }
    return (
        <>
            <Product allProducts={allProducts} onDelete={onDelete}/>
        </>
    )
}

export default Products
