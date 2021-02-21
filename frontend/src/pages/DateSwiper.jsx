import PetDeck from 'components/cards/PetDeck';
import * as React from 'react';

const AdoptableSwiper = () => {
  
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
        <PetDeck />
      </div>
    </section>
  );
};

export default AdoptableSwiper;