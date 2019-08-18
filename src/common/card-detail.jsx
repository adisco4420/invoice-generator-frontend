import React, { Component } from 'react';

class CardDetail extends Component {
    state = {  }
    getActIconBgcolor(title) {
        switch (title) {
            case 'income': case 'total':
                return {bgColor: 'bg-success', icon: 'text-primary fa-tags'}
            case 'expense': case 'paid':
                return {bgColor: 'bg-danger', icon: 'text-primary fa-credit-card'}
            default:
                return {bgColor: 'bg-primary', icon: 'text-primary fa-eye'}
        }
    }
    render() {        
        const { data } = this.props;
        return ( <React.Fragment>
                                {
                                data.map((item, index) => {
                                    return <div key={index} className="col-md-4">
                                        <div className="card" style={{ minHeight: '140px' }}>
                                            <div className="card-body mt-3">
                                                <h5>{item.balance + '.00'}</h5>
                                                <button style={{ padding: '0px 5px' }} className={`btn btn-sm text-light text-lowercase ${this.getActIconBgcolor(item.title).bgColor}`}>
                                                    {`${item.title} - usd`}
                                                </button>
                                                <div className="float-right"><i className={`fa ${this.getActIconBgcolor(item.title).icon} fa-2x`}></i></div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
        </React.Fragment> );
    }
}
 
export default CardDetail;