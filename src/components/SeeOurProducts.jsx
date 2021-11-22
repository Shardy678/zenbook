import React from "react";
import { Container } from "react-bootstrap";

const SeeOurProducts = () => {
  return (
    <div className="background see-our-products">
      <Container>
        <div className="card-container row">
          <div className="card-image col-6"></div>
          <div className="card-text col-6">
            <h2>We Provide You The Experience</h2>
            <p>
              Browse the collection of our best selling and top interesting
              products
            </p>
            <button>See our products</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SeeOurProducts;
