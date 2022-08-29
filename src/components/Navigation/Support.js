import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Search({ isActive, setIsActive }) {
  const [title, setTitle] = useState("");
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();

  function searchEnter() {
    if (title !== "") {
      setIsActive(false);
      navigate("https://janica.jp");
    }
  }

const Content = styled.div`
  background-color: #FFFFFF;
  padding: 0rem 4rem 3.8rem 4rem;
  border-radius: 0.5rem;

  .main {
    background-color: black;
    padding: 0.5rem;
    padding-left: 1.2rem;
    padding-right: 0.8rem;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  input {
    outline: none;
    border: none;
    padding: 1rem 2rem 1rem 0.5rem;
    font-size: 1.1rem;
    font-family: "Gilroy-Medium", sans-serif;
    width: 100%;
  }
  ::placeholder {
    color: #c5c5c5;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;

    .main {
      flex-direction: column;
      background-color: transparent;
      padding: 0;
      padding-left: 0;
      padding-right: 0;
    }

    div {
      background-color: black;
      padding: 0.3rem 1rem;
      border-radius: 0.3rem;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: #000000;
    color: #DB61A2;
    font-size: 1rem;
    padding: 0.9rem 2rem;
    text-decoration: none;
    border-radius: 0.3rem;
    text-align: center;
    font-family: "Gilroy-Bold", sans-serif;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      display: block;
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 1rem;
    cursor: pointer;
  }
`;
}
