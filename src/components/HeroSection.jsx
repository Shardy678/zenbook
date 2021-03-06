import React from "react";
import Container from "react-bootstrap/Container";
import { LogoIcon, ArrowIcon } from "./icons";
import books from "./assets/images/books.png";

const HeroSection = () => {
  return (
    <div>
      <Container>
        <section className="main">
          <header>
            <LogoIcon />
            <div className="buttons">
              <a href="https://yandex.ru">Home</a>
              <a href="https://yandex.ru">Pages</a>
              <a href="https://yandex.ru">Shop</a>
              <a href="https://yandex.ru">Blog</a>
            </div>
          </header>
          <div className="hero d-flex justify-content-between">
            <div className="left col-6">
              <h1>Buy and sell your textbooks for the best price</h1>
              <p>
                From applied literature to educational resources, we have a lot
                of textbooks to offer you. We provide only the best books for
                rent.
              </p>
              <div className="search">
                <div className="search-components">
                  <input type="text" placeholder="Type here to search..." />
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div className="right col-5">
              <img src={books} alt="books" className="img-fluid" />
              <div className="description">
                <h5>Brave New World</h5>
                <p>Aldous Huxley</p>
              </div>
            </div>
          </div>
          <div className="arrow-icon">
            <ArrowIcon />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HeroSection;
