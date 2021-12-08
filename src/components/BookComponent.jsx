import React from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  .card-text {
    margin: 15px;
  }
  .card-image {
    padding: 10px;
  }

  h5 {
    font-family: Recoleta;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: black;
  }

  p {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: black;
  }

  hr {
    margin: 10px 0;
  }
`;

const BookComponent = (props) => {
  return (
    <Styles>
      <div className="border">
        <Image src={props.src} alt={props.alt} fluid className="card-image" />
        <div className="card-text">
          <h5>{props.name}</h5>
          <hr />
          <p>{props.author}</p>
        </div>
      </div>
    </Styles>
  );
};

export default BookComponent;
