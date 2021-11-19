import React from "react";
import Container from "react-bootstrap/Container";
import { LogoIcon, ArrowIcon } from "./icons";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                aliquam nunc condimentum eget orci morbi sapien cursus.
              </p>
              <div className="search">
                <div className="search-components">
                  <input type="text" placeholder="Type here to search..." />
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div className="right col-5">
              <img src="../assets/images/book.jpg" alt="books" />
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
