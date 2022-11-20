import React from 'react'

const CustomFragment = (props) => {  
  let name = props.displayName;  
  
  return (
    <React.Fragment>
        <h1>Display : {name}</h1>
        {props.children}
    </React.Fragment>
  );
}

export default CustomFragment