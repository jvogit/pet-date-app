import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { H1, Label1 } from 'baseui/typography';
import AnimalDeck from 'components/cards/AnimalDeck';
import * as React from 'react';
import AnimalService from "services/AnimalService";
import {Select} from 'baseui/select';

const Swiper = () => {
  const [animals, setAnimals] = React.useState([{ value: "dogs" }]);
  const [zipcode, setZipcode] = React.useState(undefined);
  // miles in format [{ value: 50 }]
  const [miles, setMiles] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  }

  return (
    <section
      style={{
        marginTop: "5vh",
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
            <AnimalDeck getAnimalData={AnimalService.getNear} args={{ animal: animals[0].value, zipcode, miles: miles[0].value }} />
            :
            (
              <form
                onSubmit={onSubmit}
                style={{
                  marginTop: "10vh",
                  width: "30vw"
                }}
              >
                <H1>Swiper</H1>
                <Label1>Find adoptable pets near you!</Label1>
                <Select
                  options={[
                    { value: "dogs" },
                    { value: "cats" },
                    { value: "hamsters" },
                    { value: "alpacas" }
                  ]}
                  labelKey="value"
                  valueKey="value"
                  placeholder="Animal Type"
                  onChange={({ value }) => setAnimals(value)}
                  value={animals}
                />
                <Input
                  placeholder="Zip code"
                  onChange={({ target }) => {
                    let value = target.value;
                    setZipcode(value);
                  }}
                />
                <Select
                  options={[
                    { value: 50 },
                    { value: 100 },
                    { value: 150 },
                    { value: 200 }
                  ]}
                  labelKey="value"
                  valueKey="value"
                  placeholder="Range in Miles"
                  onChange={({ value }) => setMiles(value)}
                  value={miles}
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

export default Swiper;