import * as React from 'react';
import DogCard from "components/cards/AnimalCard";
import DogService from "services/AnimalService";

const AnimalDeck = ({ getAnimalData, args }) => {
  const [data, setData] = React.useState([]);

  const queue = (old_data, new_data) => {
    console.log([...new_data, ...old_data].map(item => item.attributes.name));
    return [...new_data, ...old_data];
  };

  const pop = (old_data) => {
    console.log("Removing", old_data.length, "Now", old_data.length - 1);
    console.log("Bye", old_data[old_data.length - 1].attributes.name);
    return old_data.slice(0, -1);
  }

  React.useEffect(() => {
    getAnimalData(args)
      .then((response) => {
        let new_data = DogService.toAnimalData(response);
        setData(old_data => queue(old_data, new_data));
      })
  }, []);

  React.useEffect(() => {
    console.log("Length effect", data.length);
    if (data.length === 10) {
      console.log("Fetching new content!");
      getAnimalData(args)
        .then((response) => {
          let new_data = DogService.toAnimalData(response);
          setData(old_data => queue(old_data, new_data));
        })
    }
  }, [data]);

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
            <DogCard 
              key={item.id} 
              dog={item}
              onSwiped={() => {
                setData(old_data => pop(old_data));
              }}
            />
          ))
      }
    </div>
  );
};

export default AnimalDeck;