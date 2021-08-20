import "../App.css"
import Product from "./Product"


const Products = ({onDelete, allProducts, searchTerm}) => {

    return (
        <>
            <Product allProducts={allProducts} searchTerm={searchTerm} key={allProducts.id} onDelete={onDelete}/>
        </>
    )
}

export default Products
