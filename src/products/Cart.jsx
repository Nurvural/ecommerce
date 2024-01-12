import React from 'react'
import './Cart.css';

function Cart() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sepetim</h2>

      <div className="card">
        <div className="card-body custom-card-color">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center color">
              Ürün 1
              <span className="badge rounded-pill">20 TL</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center color">
              Ürün 2
              <span className="badge rounded-pill">30 TL</span>
            </li>
           
          </ul>

          <div className="mt-3 d-flex justify-content-between align-items-center">
            <h5>Toplam: </h5>
            <h5>50 TL</h5>
          </div>

          <button className="btn btn-color mt-3">Satın Al</button>
        </div>
      </div>
    </div>
  )
}

export default Cart