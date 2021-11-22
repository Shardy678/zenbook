import React from "react";
import Container from "react-bootstrap/Container";
import BookComponent from "./BookComponent";
import book from "./assets/images/book.jpg";
import chrysalids from "./assets/images/chrysalids.png";
import incoldblood from "./assets/images/in-cold-blood.png";
import janeeyre from "./assets/images/jane-eyre.png";
import mobydick from "./assets/images/moby-dick.png";

const BestSellerSection = () => {
  return (
    <div className="second">
      <Container>
        <section className="best-seller">
          <h1 className="text-center heading">Best Seller Books</h1>
          <div className="row">
            <BookComponent
              image={chrysalids}
              name="The Chrysalids"
              description="John Wyndham"
            />
            <BookComponent
              image={incoldblood}
              name="In Cold Blood"
              description="Truman Capote"
            />
            <BookComponent
              image={janeeyre}
              name="Jane Eyre"
              description="Charlotte Brontë"
            />
            <BookComponent
              image={mobydick}
              name="Moby-Dick"
              description="Herman Melville"
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default BestSellerSection;
