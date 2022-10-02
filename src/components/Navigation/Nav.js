import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import Search from "./Search";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <div>
      <NavBar>
        <Link to="/">
          <img src="./assets/logo.png" alt="Sakamoto" width="60"/>
        </Link>
        <div className="nav-links">
          <Links to="/#">Home</Links>
          <Links to="/popular">Popular</Links>
          <Links to="/#">Forum</Links>
          <Links to="/help">Help</Links>
        </div>

        {width <= 600 && (
          <IconContext.Provider
            value={{
              size: "1.5rem",
              style: {
                verticalAlign: "middle",
                marginBottom: "0.2rem",
                marginRight: "0.3rem",
              },
            }}
          >
            <Button onClick={(e) => setIsActive(!isActive)}>
              <FiSearch />
            </Button>
          </IconContext.Provider>
        )}
        {width > 600 && (
          <IconContext.Provider
            value={{
              size: "16px",
              style: {
                verticalAlign: "middle",
                marginBottom: "0.2rem",
                marginRight: "0.3rem",
              },
            }}
          >
            <Button onClick={(e) => setIsActive(!isActive)}>
              <FiSearch />
              Search
            </Button>
          </IconContext.Provider>
        )}
      </NavBar>
      {isActive && <Search isActive={isActive} setIsActive={setIsActive} />}
      {isActive && <Shadow></Shadow>}
    </div>
  );
}

const Shadow = styled.div`
  z-index: 9;
  position: absolute;
  top: 0;
  height: 420vh;
  width: 98.6vw;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  @media screen and (max-width: 600px) {
    height: 330vh;
  }
`;

const Button = styled.button`
  color: #23272A;
  font-family: "Gilroy-Bold", sans-serif;
  background-color: #FFFFFF;
  outline: none;
  border: none;
  padding: 0.7rem 1.6rem 0.7rem 1.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s;
  &:hover {
    background-color: #808080;
  }
  FiSearch {
    font-size: 1rem;
  }
  black-space: nowrap;
  @media screen and (max-width: 600px) {
    color: #FFFFFF;
    padding: 0.5rem;
    padding-right: 0;
    background-color: transparent;
    &:hover {
      background-color: transparent;
      color: #808080;
    }
  }
`;

const Links = styled(Link)`
  color: #FFFFFF;
  font-family: "Gilroy-Medium", sans-serif;
  text-decoration: none;
  padding: 0rem 1.3rem 0.5rem 1.3rem;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.8rem 5rem 0 5rem;
  @media screen and (max-width: 600px) {
    margin: 1rem 2rem;
    margin-top: 1rem;
    img {
      height: 1.7rem;
    }
    .nav-links {
      display: none;
    }
  }
`;

export default Nav;
