import React from "react";
import { FoodContainer } from "./FoodCardElements";
import ImageCard from "./ImageCard";
import foods from "../static/foods";
import useWindowPosition from "../hook/useWindowPosition";

const TypeFood = () => {
  const checked = useWindowPosition("header");
  return (
    <FoodContainer id="place-to-food">
      <ImageCard place={foods[1]} checked={checked} />
      <ImageCard place={foods[0]} checked={checked} />
    </FoodContainer>
  );
};

export default TypeFood;
