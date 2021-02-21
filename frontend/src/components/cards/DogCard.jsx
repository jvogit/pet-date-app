import { Button, KIND, SHAPE } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import * as React from 'react';
import TinderCard from 'react-tinder-card';

const DogCard = ({ dog, onSwiped }) => {
  return (
    <TinderCard
      className="swipe"
      onCardLeftScreen={onSwiped}
      onSwipe={() => console.log("Swipe!!")}
      preventSwipe={["up", "down"]}
    >
      <div
        style={{
          backgroundImage: `url(${dog.pictures[0]["large"].url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "80vw",
          maxWidth: "500px",
          height: "650px",
          borderRadius: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "inherit",
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ paddingBottom: "1rem" }}
            >
              <Button
                kind={KIND.secondary}
                shape={SHAPE.circle}
                onClick={() => console.log("yessir")}
              >
                <ChevronDown
                  size={64}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TinderCard>
  );
};

export default DogCard;