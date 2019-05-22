import React from 'react'
function Footer() {
    return (
        <footer style={{backgroundColor: '#0d2f40'}} class="footer py-3">
        <div class="container">
          <span class="text-light">&copy; 2019 InvoiceNG - All Rights Reserved.</span>
          <div className="float-right text-light">
              <i className="fa fa-facebook ml-2 "></i>
              <i className="fa fa-twitter ml-2 "></i>
              <i className="fa fa-instagram ml-2 "></i>
              <i className="fa fa-whatsapp ml-2 "></i>
          </div>
        </div>
      </footer>
    )
}
export default Footer