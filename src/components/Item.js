import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap, Linear } from "gsap";

const ItemContainer = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HoverDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;
  img {
    width: 200px;
    height: 200px;
  }
`;

const Item = (props) => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef(null);
  const hoverAnimation = (e) => {
    const tl = gsap.timeline();

    tl.to(ref.current, {
      opacity: 1,
      x:
        (state.x -
          ref.current.parentNode.getBoundingClientRect().left -
          ref.current.getBoundingClientRect().width / 2) *
        0.4,
      y:
        (state.y -
          ref.current.parentNode.getBoundingClientRect().top -
          ref.current.getBoundingClientRect().height / 2) *
        0.4,
      ease: Linear.easeNone,
    });
  };

  const hoverOut = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, { x: 0, y: 0 }).to(
      ref.current,
      { opacity: 0, duration: 1 },
      0
    );
  };

  useEffect(() => {
    const set = (e) => {
      setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", set);
    return () => {
      window.removeEventListener("mousemove", set);
    };
  }, []);

  return (
    <>
      <ItemContainer onMouseLeave={hoverOut} onMouseMove={hoverAnimation}>
        <img src={props.img}></img>
        <HoverDiv ref={ref}>
          <img src={props.hoverImage}></img>
        </HoverDiv>
      </ItemContainer>{" "}
    </>
  );
};

export default Item;
