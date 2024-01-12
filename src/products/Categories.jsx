import React from 'react'

function Categories() {
  return (
    <div>Categories</div>
  )
}

export default Categories
/*import React, { useState, useEffect } from "react";
import "./Category.css";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/Data.json');
        if (!response.ok) {
          throw new Error('Veriler alınamadı. Lütfen daha sonra tekrar deneyin.');
        }
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setError('Veriler alınamadı. Lütfen daha sonra tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div>
      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}
      <div className="list-group">
        <button
          key="all"
          className={`list-group-item list-group-item-action ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => handleCategoryClick("all")}
         
        >
          Tüm Ürünler
        </button>
        {uniqueCategories.map((category, index) => (
          <button
            key={category}  // Dizideki sıra numarasını kullanarak eşsiz bir anahtar oluşturuyoruz
            className={`list-group-item list-group-item-action ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
            to={`/products/category/${category}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;*/
