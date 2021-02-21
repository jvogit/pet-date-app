import * as React from 'react';
import { H1, H2, H3, H4, ParagraphLarge, ParagraphXSmall } from 'baseui/typography';
import { Card, StyledBody } from 'baseui/card';

const Adoption = () => {
  return (
    <section
      style={{
        margin: "0 auto",
        marginTop: "5vw",
        width: "75%",
      }}
    >
      <Card>
        <StyledBody>
          <H1>So, how do I adopt?</H1>
          <ParagraphLarge>
            Here some steps. Check out this <a href="https://animalcare.saccounty.net/Adoption/Pages/AdoptionProcess.aspx"> website</a> for more information.
        </ParagraphLarge>
          <ul>
            <li>Must be 18 years of age or older</li>
            <li>Make sure to do your research before adopting! Pets may require a lot more resources and attention than you think</li>
            <li>View adoptable pets online using this App</li>
            <li>Visit and get acquainted with the pet before deciding to adopt </li>
            <li>Fill out paperwork</li>
            <li>Pay adoption and licensing fees</li>
            <li>Spray/Neuter your new pet (if it is not already)</li>
          </ul>
        </StyledBody>
      </Card>
    </section>
  );
};

export default Adoption;