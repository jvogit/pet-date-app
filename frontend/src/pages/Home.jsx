import { ALIGNMENT, Cell, Grid } from "baseui/layout-grid";
import { H1, H2, H3, Label1, Label2, Paragraph1 } from "baseui/typography";
import {
  Card,
  StyledBody,
  StyledAction,
} from "baseui/card";
import React from "react";
import { Button } from "baseui/button";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <section
    >
      <div
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <Grid
          align={ALIGNMENT.center}
        >
          <Cell span={[4, 8, 6]}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "60px"
              }}
            >
              <H1>Pet Date App</H1>
              <Label1>Score a pet date!</Label1>
              <Label2>Built By: Justin Vo and Angelina Vu</Label2>
            </div>
          </Cell>
          <Cell span={[4, 8, 6]}>
            <Card
              title="Join now!"
              overrides={{
                Title: H2
              }}
            >
              <StyledBody>
                <Paragraph1>
                  Sign up for an account!
                </Paragraph1>
                <H3>Features</H3>
                <ul>
                  <li>Pet dates</li>
                </ul>
              </StyledBody>
              <StyledAction>
                <Button
                  $style={{
                    width: "100%"
                  }}
                  onClick={() => history.push("/signup")}
                >
                  Sign up
                </Button>
              </StyledAction>
            </Card>
          </Cell>
        </Grid>
      </div>
    </section>
  );
}

export default Home;