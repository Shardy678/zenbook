import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .background {
    background: #eceeeb;
    height: 270px;
    padding-top: 60px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 48px;
  }
  button {
    background: #00a96c;
    border: none;
    color: white;
    font-size: 24px;
    font-family: Recoleta;
    font-style: normal;
    font-weight: normal;
    padding: 5px 50px;
  }
`;

const AdSection = () => {
  return (
    <Styles>
      <div className="background">
        <Container>
          <h1 className="col-7">
            2021 National Book Award for Fiction shortlist
          </h1>
          <button>Shop</button>
        </Container>
      </div>
    </Styles>
  );
};

export default AdSection;
