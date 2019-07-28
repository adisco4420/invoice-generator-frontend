import React from 'react';

const TextArea = ({meta, onChangeField, error}) => {
    return (          
    <div className="form-group">
    <label className="text-capitalize" htmlFor={meta.name}>{meta.label}</label>
    <textarea  
    className="form-control"
    name={meta.name}
    id={meta.name} 
    onChange={onChangeField}
    placeholder={`Enter ${meta.label}`}
    value={meta.value || ''}
    cols="3" rows="3"></textarea>
    {error && <div className="alert alert-danger">{error}</div>}
  </div> );
}
 
export default TextArea;