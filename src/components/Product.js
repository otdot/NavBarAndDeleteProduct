import '../App.css'

const Product = ({allProducts, onDelete, searchTerm}) => {

    return (
        <div className='Product'>
            {allProducts.filter((product)=> {
                if (searchTerm == '') {
                    return product
                } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return product
                }
            }).map((product) => (
            <div key={product.id}>
            <h3 onClick={() =>onDelete(product.id)}>{product.title}</h3>
            <p>{product.BB}</p>       
            </div>
            ))}
        </div>
    )
}

export default Product
