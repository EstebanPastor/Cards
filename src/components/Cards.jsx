import React from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Esteban Pastor LinkedIn",
    image: image1,
    url: "https://www.linkedin.com/in/estebanandrespastor/",
    text: "LinkedIn profile",
  },
  {
    id: 2,
    title: "Esteban Pastor Github",
    image: image2,
    url: "https://github.com/EstebanPastor",
    text: "Github Profile",
  },
  {
    id: 3,
    title: "Esteban Pastor Porftolio",
    image: image3,
    text: "Personal portfolio",
  },
];

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
