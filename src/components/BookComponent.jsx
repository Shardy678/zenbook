import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  .image {
    height: 255px;
    width: 255px;
    background-color: gray;
    margin: 10px;
  }

  h5 {
    font-family: Recoleta;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: black;
  }

  .text {
    margin: 15px;
  }

  p {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: black;
  }

  .card-image {
    padding: 10px;
  }

  hr {
    margin: 10px 0;
  }
`;

const BookComponent = (props) => {
  return (
    <div className="col-3">
      <Styles>
        <div className="border">
          <Image
            src="../assets/images/book.jpg"
            alt="book"
            fluid
            className="card-image"
          />
          <div className="text">
            <h5>{props.name}</h5>
            <hr />
            <p>{props.description}</p>
          </div>
        </div>
      </Styles>
    </div>
  );
};

export default BookComponent;
