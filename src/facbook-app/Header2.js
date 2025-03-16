import React from "react";

function Header2({ onLogout, isLoggedIn }) {
  // Correct prop name

  const handleClick = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
      <div className="header__broad" onClick={handleClick} style={{cursor: 'pointer'}}>
        <h1>{isLoggedIn ? 'PORTFOLIO' : 'HOME'}</h1>
        {/* {isLoggedIn && <button onClick={handleClick}>Logout</button>} */}
      </div>
  );
}

export default Header2;
