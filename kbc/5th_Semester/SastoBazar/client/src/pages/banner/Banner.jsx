import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { items } from "./BannerData";

export default function Banner() {
  return (
    <>
      <Carousel indicators={false}>
        {items.map((value, index) => (
            <Carousel.Item key={value.id} >
            <img src={value.image}  alt="value.title" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
