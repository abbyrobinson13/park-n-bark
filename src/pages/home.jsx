import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { ImagesData } from "../components/Carousel/ImagesData";
import DogFactBox from "../components/DogFactBox";
import Cards from "../components/Cards/CardUI.jsx";

const Main = () => {
  return (
    <header className="App-header">
      <Carousel slides={ImagesData} />
      <DogFactBox />
      <Cards />
    </header>
  );
};

export default Main;
