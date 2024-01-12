import React from 'react'

function Footer() {
    const customStyle = {
        backgroundColor: '#e4d2d2 ',
        color: '#795b5b',            
        padding: '20px', 
        position: 'fixed',
        bottom: '0',
        width: '100%',            
      };
      const linkStyle = {
        color: '#795b5b', 
        textDecoration: 'none', 
      };
  return (
    <footer style={customStyle} className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" style={linkStyle}>Nur Vural</a></li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item" ><a href="#" style={linkStyle}>nurvural@hotmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer