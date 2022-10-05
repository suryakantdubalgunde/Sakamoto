import React from "react";
// import logo from "./public/assets/img/ghost.png";
import styled from "styled-components";

function PageNotFound() {
    return (
        <div className="pageNotFound">
                        <img src="https://cdn.discordapp.com/attachments/928341740434378752/1016160204355813437/3.png" width="320" alt="Akio" ></img>
                        <div className="errorMessage">
                            <p className="err">ERROR</p>
                            <p className="num"> 404</p>
                            <h1>Looks like you are lost...</h1>
                        </div>
        </div>
    );
};

export default PageNotFound;
