import React from 'react'
import './Project1.css';

export default function Alert(props) {

    let str = `${props.alert.type}`;
    let newStr = str[0].toUpperCase()+str.slice(1);
  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show myAlert" role="alert">
      <strong>{newStr} </strong>{props.alert.msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      
    </div>
    
  )

  
}
