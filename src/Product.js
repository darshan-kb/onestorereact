
function Product({products, title}){
    return(
        <div className="product-list">
            <h2>{title}</h2>
            {products.map((product)=>(
                <div className="product-preview"  key={product.product_ID}>
                    <h2>{product.product_name}</h2>
                    <p>{product.product_description}</p>
                    <p>Price : {product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Product;