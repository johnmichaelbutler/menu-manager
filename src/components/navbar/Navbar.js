import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import AboutPage from '../../pages/aboutPage/aboutPage.component';
import LogInPage from '../../pages/logInPage/logInPage.component';
import SignUpPage from '../../pages/signUpPage/signUpPage.component';
import Homepage from '../../pages/homePage/homePage.component';
import firebase from 'firebase';


import { useSelector } from 'react-redux';

const Navbar = (props) => {
  const isSignedIn = useSelector(state => state.isSignedIn);
  console.log("isSignedIn:" + isSignedIn);

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <Router>
      <div>
        <NavBar style={barAnimation}>
          <FlexContainer>
            <Brand />
            <NavLinks style={linkAnimation}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
              { isSignedIn ? (
                <NavLink to="/" onClick={() => firebase.auth().signOut()}>Sign Out</NavLink>
                ): (
                <NavLink to="/"></NavLink>
                )
              }
            </NavLinks>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBar>
        <CollapseMenu
          navbarState={props.navbarState}
          handleNavbar={props.handleNavbar}
        />

        <Switch>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/login'>
            <LogInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar;

const NavBar = styled(animated.div)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;