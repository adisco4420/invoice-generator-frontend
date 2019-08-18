import React from 'react'

const PageHeader = ({title}) => {
    return (<span  style={{ fontSize: '25px' }}>{title || 'Header'}</span>);
}
 
export default PageHeader;