import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const menuList = ["여성", "남성", "청소년", "유아", "Home", "Sale", "Brand"];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="nav-header">
        <div className="burger-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to={"/"}>
          <img
            src="https://framerusercontent.com/images/nlD3uVrQgplNdm7F8h0w6XQgr2A.svg"
            width={150}
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
      </div>
    </div>
  );
};

export default Navbar;
