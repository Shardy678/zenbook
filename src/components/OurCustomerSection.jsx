import React from "react";
import { Container } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

const OurCustomerSection = () => {
  return (
    <div className="customer-section">
      <Container>
        <h1 className="text-center pb-5">Our Customers</h1>
        {/* поменять расстояние на 90px */}
        <div className="row">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </Container>
    </div>
  );
};

export default OurCustomerSection;
