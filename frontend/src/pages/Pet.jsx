import axios, { getWithToken } from "utils/Request";
import PetCard from 'components/cards/PetCard';
import * as React from 'react';
import LoadingLayout from "components/layouts/LoadingLayout";
import { useParams } from "react-router-dom";

const Pet = () => {

  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [pet, setPet] = React.useState(null);

  React.useEffect(() => {
    getWithToken(`/api/pet/${id}`)
      .then(res => {
        console.log(res.data);
        setPet(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      style={{
        marginTop: "5vh",
        minHeight: "650px",
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
          loading ?
            <LoadingLayout />
            :
            (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <PetCard 
                  pet={pet} 
                  disabled={true}
                />
              </div>
            )
        }
      </div>
    </section>
  );
};

export default Pet;