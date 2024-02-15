import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Carousel.scss";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };

  setTimeout(() => {
    currentSlide === 5 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  }, 3500);

  return (
    <div className="carousel">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
        <img src={data[5]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
