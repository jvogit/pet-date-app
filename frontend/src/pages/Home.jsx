import { Cell, Grid } from "baseui/layout-grid";
import { H1, Label1, Label2, Paragraph1, } from "baseui/typography";
import React from "react";
import { useHistory } from "react-router-dom";
import AnimalDeck from "components/cards/AnimalDeck";
import AnimalService from "services/AnimalService";
import { Button } from "baseui/button";

export const Home = () => {
  const history = useHistory();

  return (
    <section
      style={{
        paddingTop: "5vh"
      }}
    >
      <Grid>
        <Cell span={[4, 8, 6]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <H1>Pet Date App</H1>
            <Label2>Built By: Justin Vo and Angelina Vu</Label2>
            <Paragraph1>
              Millions of dogs and cats enter shelters every year.
              These pets need companions more than ever! We built this fun
              app for all pet lovers! Swipe through photos of 
              adorable, adoptable pets
              in a "virtual" date. You can
              also find more information on a specific adoptable pet
              by tapping the button below! If you sign up, find adoptable pets near you with "Animal Swiper"!
              Thinking about adopting? We have
              some general information on who can adopt.
              Adopt a pet today!
            </Paragraph1>
            <Paragraph1>
              Signing up also gains you access to "Date Swiper".
              Upload your pet's "dating profile"
              for other pet owners to swipe through! Similar to
              Tinder, swipe right if you absolutely found them adorable!
              Swipe score represents
              how many times your pet was loved! In the future, we would like to
              build a platform for pet owners to set up "pet dates" with other local
              pet owners!
            </Paragraph1>
            <Button
              onClick={() => {
                history.push("/signup");
              }}
            >
              Sign Up!
            </Button>
          </div>
        </Cell>
        <Cell span={[4, 8, 6]}>
          <AnimalDeck getAnimalData={AnimalService.getRandomAnimals}/>
        </Cell>
      </Grid>
    </section>
  );
}

export default Home;