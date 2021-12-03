import React from "react";
import Container from "react-bootstrap/Container";
import BookComponent from "./BookComponent";
import chrysalids from "./assets/images/chrysalids.png";
import incoldblood from "./assets/images/in-cold-blood.png";
import janeeyre from "./assets/images/jane-eyre.png";
import mobydick from "./assets/images/moby-dick.png";

const books = [
  {
    id: 1,
    name: "The Chrysalids",
    author: "John Wyndham",
    image: "chrysalids",
  },
  {
    id: 2,
    name: "In Cold Blood",
    author: "Truman Capote",
    image: "in-cold-blood",
  },
  {
    id: 3,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
  {
    id: 3,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
  {
    id: 3,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
];

const BestSellerSection = () => {
  return (
    <div className="second">
      <Container>
        <section className="best-seller">
          <h1 className="text-center heading">Best Seller Books</h1>
          <div className="row">
            {books.slice(0, 4).map((book) => (
              <BookComponent
                key={book.id}
                name={book.name}
                author={book.author}
                alt={book.name}
                src={require("./assets/images/" + book.image + ".png").default}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default BestSellerSection;
