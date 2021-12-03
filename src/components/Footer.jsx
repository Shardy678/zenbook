import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  h5 {
    font-family: Recoleta;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;

    color: #000000;
  }
  li {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #000000;
  }
`;

const Footer = () => {
  return (
    <Styles>
      <footer className="background">
        <Container>
          <div className="row">
            <div className="col-6 col-md">
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li>Legal Notice</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>CGV</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Secure Payment</h5>
              <ul className="list-unstyled">
                <li>Secure Payment platform encrypted by TLS protocol (SSL)</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Social Networks</h5>
              <ul className="list-unstyled">
                <li>Pinterest</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About us</h5>
              <ul className="list-unstyled">
                <li>Become an Affiliate</li>
                <li>Returns and Refund Policy</li>
                <li>Gift cards</li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </Styles>
  );
};

export default Footer;
