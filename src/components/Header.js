import React from 'react';
import "./Header.css";

function Header() {
  const name = 'Goshan';
  const surname = 'Ololo';
  const countryName = 'Sparta!!!'
  return(
    <div>
      <header className="navbar">Header component</header>
      <div style={{fontSize: 20, color: "red"}}>
        This is {countryName}
        </div>  
        <div style={{color: "green"}}>
        Name is {`${name} and surname is ${surname}`}
        </div>
    </div>
  );
}

export default Header;