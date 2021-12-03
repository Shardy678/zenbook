import React from "react";
import Container from "react-bootstrap/Container";
import BookComponent from "./BookComponent";
import book from "./assets/images/book.jpg";

const OtherBookSection = () => {
  return (
    <div className="second">
      <Container>
        <section className="best-seller">
          <h1 className="text-center heading">Other Books</h1>
          <div className="row">
            <BookComponent image={book} name="Sample" description="Sample" />
            <BookComponent image={book} name="Sample" description="Sample" />
            <BookComponent image={book} name="Sample" description="Sample" />
            <BookComponent image={book} name="Sample" description="Sample" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default OtherBookSection;
