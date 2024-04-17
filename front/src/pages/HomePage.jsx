import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 50px;
  text-align: center;
`; 

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 

const Links = styled(Link)`
  text-decoration: none;
  color: #555;
  font-weight: bold;
  margin: 20px 30px;
  padding: 20px 60px;
  background-color: #fff;
  border:1px solid cornflowerblue;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: cornflowerblue;
    border: 1px solid #fff;
  }
`;

const HomePage = () => {
  return <>
  <Title>Main Home</Title>

  <Nav>
    <Links to='/join'>Join</Links> <br/>
    <Links to='/user'>User</Links> <br/>
  </Nav>

  </>;
};

export default HomePage;
