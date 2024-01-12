import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/Data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="row row-cols-sm-4">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
