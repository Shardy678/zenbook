import React from "react";
import { Container } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const users = [
  {
    id: 1,
    name: "Timmothy Brown",
    position: "Web Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in sunt rerum enim minima porro saepe beatae sint culpa est.",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    id: 2,
    name: "Lucas Washington",
    position: "Marketing Manager",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint ipsa illo vitae nobis maxime temporibus iure eveniet dolore.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Denise Grant",
    position: "Architect",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas fuga illo ab laborum explicabo esse porro deleniti quidem ducimus.",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    id: 4,
    name: "Joan Hopkins",
    position: "Lawyer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dignissimos a! Adipisci ex recusandae possimus molestias voluptatum. Itaque, quas!",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
];

const OurCustomerSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="customer-section">
      <Container>
        <h1 className="text-center pb-5">Our Customers</h1>
        {/* поменять расстояние на 90px */}
        <div className="row">
          <Slider {...settings}>
            {users.map((user) => (
              <ReviewCard
                key={user.id}
                name={user.name}
                review={user.review}
                image={user.image}
                position={user.position}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OurCustomerSection;
