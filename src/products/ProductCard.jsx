import React from "react";
import './ProductCard.css'


function ProductCard({ item, onAddToCart }) {
  const maxDescriptionLength = 100; 

  return (
    <div className="card mt-2 " style={{ width: "18rem", margin: "0 auto"}}>
      <img
        src={item.image}
        className="card-img-top"
        alt="Product Image"
        style={{ width: "100%", height: "200px", objectFit: "cover",  }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
       
        <p className="card-text">
          <strong>{item.price}</strong>
        </p>
        <button className="btn btn-light" onClick={() => onAddToCart(item)}>Sepete ekle</button>
      </div>
    </div>
  );
}

export default ProductCard;
