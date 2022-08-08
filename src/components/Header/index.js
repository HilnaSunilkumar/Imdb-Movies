import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import  ProfileImg from '../../images/proimg.jpg'

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg, ImageContainer } from "./Header.style";

export const Header = () => {
  const [user] = useContext(Context);
  console.log(user, "user");

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo"></LogoImg>
        </Link>
        {user ? (
          <span className="login">
            <b>Logged in as :   {user.username}</b>
          </span>
        ) : (
          <Link to="/login">
            <span className="login">
              <b>Login</b> 
            </span>
          </Link>
          
        )}
         <ImageContainer src={ProfileImg} alt="profile"></ImageContainer>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"></TMDBLogoImg>
      </Content>
    </Wrapper>
  );
};
