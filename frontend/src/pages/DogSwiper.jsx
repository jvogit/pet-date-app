import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { H1 } from 'baseui/typography';
import DogDeck from 'components/cards/DogDeck';
import * as React from 'react';
import DogService from "services/DogService";

const DogSwiper = () => {
  const [zipcode, setZipcode] = React.useState(undefined);
  const [miles, setMiles] = React.useState(undefined);
  const [show, setShow] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  }

  return (
    <section
      style={{
        marginTop: "5vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          show ?
            <DogDeck getDogItemsRequest={DogService.getDogsNear} args={{ zipcode, miles }} />
            :
            (
              <form onSubmit={onSubmit}>
                <Input
                placeholder="Zip code"
                onChange={({target}) => {
                  let value = target.value;
                  setZipcode(value);                  
                }}
                />
                <Input
                placeholder="Range in Miles"
                onChange={({target}) => {
                  let value = target.value;
                  setMiles(value);
                }}
                />
                <Button type="submit" $style={{
                  width: "100%"
                }}>Let's go!</Button>
              </form>
            )
        }
      </div>
    </section>
  );
};

export default DogSwiper;