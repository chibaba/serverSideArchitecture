// survey field containlogic to render  a single 
//label and text fielkd
import React from 'react';

export default ({input, label })=> {

  return (
    <div>
      <label>{label}</label>
        <input {...input} /> 
    </div>
  );
};