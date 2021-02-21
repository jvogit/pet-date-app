import axios, { getWithToken } from "utils/Request";

export const getRandomAnimals = () => {
  return axios.get("/api/public/animals/feed");
};

export const getNear = ({animal,  zipcode, miles }) => {
  return getWithToken(`/api/${animal}/near`, { zipcode, miles });
};

export const toAnimalData = (response) => {
  if (!response.data.data) return [];
  return response.data.data
  .map((item) => toAnimalItem(item, response.data.included))
  .filter((item) => item.pictures.length !== 0);
}

export const toAnimalItem = (dog_item, included) => {
  let dog = {
    id: dog_item.id,
    attributes: dog_item.attributes,
  }

  const find = (relationship) => {
    if (!dog_item.relationships[relationship]) return [];
    return included
    .filter((item) => item.type === relationship && dog_item.relationships[relationship].data.map(item => item.id).includes(item.id))
    .map(item => item.attributes);
  }

  dog.breeds = find("breeds");
  dog.orgs = find("orgs");
  dog.pictures = find("pictures");

  return dog;
}

const AnimalService = {
  getRandomAnimals,
  getNear,
  toAnimalData,
  toAnimalItem,
}

export default AnimalService;