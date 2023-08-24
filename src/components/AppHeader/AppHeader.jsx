/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppHeader = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;
