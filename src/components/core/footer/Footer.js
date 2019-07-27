import React from 'react'
function Footer() {
    return (
        <footer style={{backgroundColor: '#0d2f40'}} className="footer py-3">
        <div className="container">
          <span className="text-light">&copy; 2019 InvoiceNG - All Rights Reserved.</span>
          <div className="float-right text-light">
          <span className="fab fa-facebook-f ml-2"></span>
              <span className="fab fa-twitter ml-2 "></span>
              <span className="fab fa-instagram ml-2 "></span>
              <span className="fab fa-whatsapp ml-2 "></span>
          </div>
        </div>
      </footer>
    )
}
export default Footer