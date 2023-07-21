import React from "react";

const Product = ({product})=> {
    return(
        <div className="product-card">
            {/* <img src={product.imageUrl}/> */}
            <p>{product.name}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default Product;