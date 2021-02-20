import * as React from 'react';
import DogCard from "components/cards/DogCard";
import DogService from "services/DogService";

const DogDeck = () => {
  const [data, setData] = React.useState([]);
  
  const queue = (old_data, new_data) => {
    return [...old_data, ...new_data];
  };

  const pop = (old_data) => {
    
    old_data.pop();

    return [...old_data];
  }

  React.useEffect(() => {
    DogService.getRandomDogs()
    .then((response) => {
      let new_data = DogService.toDogData(response);
      console.log(new_data[0]);
      setData(old_data => queue(old_data, new_data));
    })
  }, []);

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
          <DogCard key={item.id} dog={item} />
        ))
      }
    </div>
  );
};

export default DogDeck;