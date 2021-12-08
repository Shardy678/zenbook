import React from "react";
import styled from "styled-components";
import { StarIcon } from "./icons";

const Styles = styled.div`
  .border {
    padding: 50px 30px;
    height: 385px;
  }
  .user-icon {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    color: #c4c4c4;
  }
  h5 {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;

    color: #000000;
  }
  h6 {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    color: #c4c4c4;
  }
  @media screen and (max-width: 1400px) {
    .border {
      height: 310px;
    }
  }
`;
const ReviewCard = (props) => {
  return (
    <Styles>
      <div className="border">
        <StarIcon />
        <p>{props.review}</p>
        <div className="d-flex align-items-center">
          <img className="user-icon" src={props.image} alt={props.name} />
          <div className="d-flex flex-column align-items-start">
            <h5>{props.name}</h5>
            <h6> {props.position} </h6>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ReviewCard;
