import { useStyletron } from 'baseui';
import { Button, KIND, SHAPE } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { H1, H2, LabelMedium, LabelSmall, LabelLarge, MonoParagraphLarge, ParagraphLarge, ParagraphXSmall } from 'baseui/typography';
import * as React from 'react';
import ReactCardFlip from 'react-card-flip';
import TinderCard from 'react-tinder-card';

const AnimalCard = ({ dog, onSwiped }) => {

  const [flip, setFlip] = React.useState(false);
  const [css, theme] = useStyletron();
  return (
    <TinderCard
      className="swipe"
      onCardLeftScreen={onSwiped}
      onSwipe={() => console.log("Swipe!!")}
      preventSwipe={["up", "down"]}
    >
      <ReactCardFlip isFlipped={flip} >
        <div
          style={{
            backgroundImage: `url(${dog.pictures[0]["large"].url})`,
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
            <H1>{dog.attributes.name}</H1>
            <LabelMedium>
              {dog.attributes.breedString}<br/>
              {dog.attributes.ageString}<br/>
              {dog.attributes.sex}<br/>
              {dog.attributes.rescueId}<br/>
            </LabelMedium>
            <H2>Contact</H2>
            <ParagraphLarge>
              {dog.orgs[0].name}<br/>
              {dog.orgs[0].street}<br/>
              {`${dog.orgs[0].citystate}, ${dog.orgs[0].postalcode}`}<br/>
            </ParagraphLarge>
            <ParagraphLarge>
              {dog.orgs[0].phone}<br/>
              {dog.orgs[0].email}<br/>
              {dog.orgs[0].url}<br/>
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

export default AnimalCard;