import { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

function Header() {

  return (
    <div>
      <div>
        <NavLink to={{pathname: "/"}}
          className="nav-link d-flex justify-content-center align-items-center">
          <img className="size-60" alt="logo" src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}/>
          <div className="fw-bold color-primary fnt-size-15">COLLABIZ TOY</div>
        </NavLink>
      </div>
      <div className="d-flex justify-content-end">
        <NavLink
          className="nav-link fw-500"
          to={{pathname: "/login"}}
          onClick={e => {
            e.preventDefault();
            window.open(e.target.href, "LOGIN", "width=430,height=500")
          }}
        >
          로그인</NavLink>
        <NavLink
          className="nav-link fw-500"
          to={{pathname: "/signup"}}
        >
          회원가입</NavLink>
      </div>
    </div>
  );
}

export default Header;