import { Button } from 'baseui/button';
import { Plus } from 'baseui/icon';
import { SIZE } from 'baseui/input';
import PetLayout from 'components/layouts/PetLayout';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

const UserPets = () => {
  const history = useHistory();
  
  return (
    <section
      style={{
        marginTop: "5vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px"
        }}
      >
        <Button
          size={SIZE.mini}
          onClick={() => {
            history.push("/upload");
          }}
          $style={{
            float: "right"
          }}
        >
          New <Plus />
        </Button>
        <PetLayout />
      </div>
    </section>
  );
};

export default UserPets;