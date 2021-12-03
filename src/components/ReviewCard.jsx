import React from "react";
import styled from "styled-components";
import { StarIcon } from "./icons";

const Styles = styled.div`
  .border {
    padding: 50px 30px;
  }
  .flex-item {
    margin-bottom: 30px;
  }
  .user-icon {
    width: 65px;
    height: 65px;
    background-color: gray;
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
`;
const ReviewCard = () => {
  return (
    <div className="col-4">
      <Styles>
        <div className="border flex-item">
          <StarIcon className="flex-item" />
          <p className="flex-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam
            felis, vel vel. Velit est tempor at sagittis amet, in neque. Mauris
            diam ipsum id faucibus leo, diam urna. Laoreet ligula.
          </p>
          <div className="d-flex align-items-center">
            <div className="user-icon"></div>
            <div className="d-flex flex-column align-items-start">
              <h5>Jane Cooper</h5>
              <h6>Marketing coordinator</h6>
            </div>
          </div>
        </div>
      </Styles>
    </div>
  );
};

export default ReviewCard;
