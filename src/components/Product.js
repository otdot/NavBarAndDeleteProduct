import '../App.css'

const Product = ({allProducts, onDelete}) => {
    return (
        <div className='Product'>
            {allProducts.map((product) => (
            <div>
            <h3 onClick={() =>onDelete(product.id)}>{product.title}</h3>
            <p>{product.BB}</p>
            </div>
            ))}
        </div>
    )
}

export default Product
