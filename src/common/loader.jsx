import React from 'react'

const Loader = ({msg}) => {
    return ( <div className="row">
        <div className="col-12">
            <div className="mt-5 text-center">
                <i className="fa fa-spinner fa-spin fa-5x mb-2"></i>
                <h5>Loading {msg || 'data'}...</h5>
            </div>
        </div>
    </div> );
}
 
export default Loader;