import { useStyletron } from 'baseui';
import { Button, KIND, SHAPE } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { H1, H2, LabelMedium, LabelSmall, LabelLarge, MonoParagraphLarge, ParagraphLarge, ParagraphXSmall } from 'baseui/typography';
import * as React from 'react';
import ReactCardFlip from 'react-card-flip';
import TinderCard from 'react-tinder-card';

const PetCard = ({ pet, onSwiped, onSwipe, disabled = false }) => {
  const [flip, setFlip] = React.useState(false);
  const [css, theme] = useStyletron();

  return (
    <TinderCard
      className="swipe"
      onCardLeftScreen={onSwiped}
      onSwipe={onSwipe}
      preventSwipe={disabled ? ["left", "right", "up", "down"] : ["up", "down"]}
    >
      <ReactCardFlip isFlipped={flip} >
        <div
          style={{
            backgroundImage: `url(${pet.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "80vw",
            maxWidth: "500px",
            height: "650px",
            borderRadius: "30px",
            borderColor: "black",
            borderStyle: "outset",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
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
                onClick={() => setFlip(true)}
                onTouchStart={() => setFlip(true)}
              >
                <ChevronDown
                  size={64}
                />
              </Button>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundPosition: "center",
            backgroundColor: theme.colors.backgroundAlt,
            backgroundSize: "cover",
            width: "80vw",
            maxWidth: "500px",
            height: "650px",
            borderRadius: "25px",
            borderColor: "black",
            borderStyle: "outset",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
            }}
          >
            <H1>{pet.name}</H1>
            <LabelMedium>
              {pet.description}
            </LabelMedium>
            <H2>Swipes</H2>
            <LabelMedium>
              {pet.swipes}
            </LabelMedium>
            <H2>Pet Owner</H2>
            <ParagraphLarge>
              {pet.user.username}
            </ParagraphLarge>
          </div>
          <div
            style={{ paddingBottom: "1rem" }}
          >
            <Button
              kind={KIND.secondary}
              shape={SHAPE.circle}
              onClick={() => setFlip(false)}
              onTouchStart={() => setFlip(false)}
            >
              <ChevronDown
                size={64}
              />
            </Button>
          </div>
        </div>
      </ReactCardFlip>
    </TinderCard>
  );
};

export default PetCard;