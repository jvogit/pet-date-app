import { Cell, Grid } from "baseui/layout-grid";
import { H1, Label1, Label2, Paragraph1, } from "baseui/typography";
import React from "react";
import { useHistory } from "react-router-dom";
import AnimalDeck from "components/cards/AnimalDeck";
import AnimalService from "services/AnimalService";

export const Home = () => {
  const history = useHistory();

  return (
    <section
      style={{
        paddingTop: "10vh"
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
            <Label1>Score a pet date!</Label1>
            <Label2>Built By: Justin Vo and Angelina Vu</Label2>
            <Paragraph1>Adopt a pet today!</Paragraph1>
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