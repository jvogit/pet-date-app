import axios, { getWithToken } from "utils/Request";

export const getRandomDogs = () => {
  return axios.get("/api/public/dogs/feed");
};

export const getDogsNear = (zipcode, miles) => {
  return getWithToken("/api/dogs/near", { zipcode, miles });
};

export const toDogData = (response) => {
  return response.data.data
  .map((item) => toDogItem(item, response.data.included))
  .filter((item) => item.pictures.length !== 0);
}

export const toDogItem = (dog_item, included) => {
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

const DogService = {
  getRandomDogs,
  getDogsNear,
  toDogData,
  toDogItem,
}

export default DogService;