import React from "react";
import Container from "react-bootstrap/Container";
import BookComponent from "./BookComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    id: 4,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
  {
    id: 5,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
  {
    id: 6,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
  {
    id: 7,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
  {
    id: 8,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "jane-eyre",
  },
];
const OtherBookSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="second">
      <Container>
        <section className="best-seller">
          <h1 className="text-center heading">Other Books</h1>
          <div className="row">
            <Slider {...settings}>
              {books.slice(0, 8).map((book) => (
                <BookComponent
                  key={book.id}
                  name={book.name}
                  author={book.author}
                  alt={book.name}
                  src={
                    require("./assets/images/" + book.image + ".png").default
                  }
                />
              ))}
            </Slider>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default OtherBookSection;
