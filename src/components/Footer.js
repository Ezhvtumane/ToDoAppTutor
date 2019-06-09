import React from 'react';
import Counter from './Counter';

function Footer() {
  const style = {
    fontSize : 20,
    color: "blue" 
  }
  return(
    <div>
      <p style={style}>Footer component</p>
      <Counter />
    </div>
  );
}

export default Footer;