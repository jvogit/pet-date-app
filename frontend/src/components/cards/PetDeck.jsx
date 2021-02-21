import * as React from 'react';
import PetCard from "components/cards/PetCard";
import { getWithToken, postWithToken } from 'utils/Request';

const PetDeck = () => {
  const [data, setData] = React.useState([]);

  const queue = (old_data, new_data) => {
    return [...new_data, ...old_data];
  };

  const pop = (old_data) => {
    return old_data.slice(0, -1);
  }

  React.useEffect(() => {
    getWithToken("/api/pet/feed")
      .then((response) => {
        let new_data = response.data;
        setData(old_data => queue(old_data, new_data));
      })
  }, []);

  {/* React.useEffect(() => {
    console.log("Length effect", data.length);
    if (data.length === 10) {
      console.log("Fetching new content!");
      getAnimalData(args)
        .then((response) => {
          let new_data = DogService.toAnimalData(response);
          setData(old_data => queue(old_data, new_data));
        })
    }
  }, [data]); */}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {
        data
          .map((item, index) => (
            <PetCard 
              key={item.id} 
              pet={item}
              onSwiped={() => {
                setData(old_data => pop(old_data));
              }}
              onSwipe={(dir) => {
                if (dir === "right") {
                  postWithToken("/api/pet/swipe", { id: item.id })
                  .then(res => {
                    console.log(res);
                  });
                }
              }}
            />
          ))
      }
    </div>
  );
};

export default PetDeck;