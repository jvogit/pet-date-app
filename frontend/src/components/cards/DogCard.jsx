import * as React from 'react';
import TinderCard from 'react-tinder-card';

const DogCard = ({ dog }) => {
  return (
    <TinderCard
      className="swipe"
      preventSwipe={["up", "down"]}
    >
        <div
          style={{
            backgroundImage: `url(${dog.pictures[0]["small"].url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "80vw",
            maxWidth: "500px",
            height: "650px",
            borderRadius: "30px"
          }}
        />
      </TinderCard>
  );
};

export default DogCard;