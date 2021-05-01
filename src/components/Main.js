import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import hover1 from "../assets/hover1.jpg";
import hover2 from "../assets/hover2.jpg";
import hover3 from "../assets/hover3.jpg";
import hover4 from "../assets/hover4.jpg";
import Item from "./Item";

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f5f5f5;
`;

const Main = () => {
  const data = [
    { img: pic1, hoverImage: pic2 },
    { img: pic2, hoverImage: hover2 },
    { img: pic3, hoverImage: hover3 },
    { img: pic4, hoverImage: hover4 },
  ];
  return (
    <>
      <Container>
        {data.map((item) => {
          return (
            <>
              <Item img={item.img} hoverImage={item.hoverImage}></Item>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Main;
