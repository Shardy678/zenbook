import React from "react";
import Container from "react-bootstrap/Container";
import BookComponent from "./BookComponent";

const BestSellerSection = () => {
  return (
    <div className="second">
      <Container>
        <section className="best-seller">
          <h1 className="text-center heading">Best Seller Books</h1>
          <div className="row">
            <BookComponent name="Sample" description="Sample" />
            <BookComponent name="Sample" description="Sample" />
            <BookComponent name="Sample" description="Sample" />
            <BookComponent name="Sample" description="Sample" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default BestSellerSection;
