import React from 'react'

function Category() {
  return (
    <div>Category</div>
  )
}

export default Category/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function Category() {
  const { categoryName } = useParams();
  
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('categoryName:', categoryName);
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/Data.json');

        if (!response.ok) {
          throw new Error('Veriler alınamadı.');
        }

        const jsonData = await response.json();
        console.log('jsonData:', jsonData);
      
  
        // Kategoriye göre filtreleme yapılır.
        const filteredProducts = jsonData.filter(item => item.category === categoryName);
        console.log('Filtered Products:', filteredProducts);

        setCategoryProducts(filteredProducts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <>
      <h1>Kategori : {categoryName}</h1>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {categoryProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Category;*/
