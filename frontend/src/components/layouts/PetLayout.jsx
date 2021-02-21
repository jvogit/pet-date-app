import { OptionProfile, StatefulMenu } from 'baseui/menu';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { getWithToken } from 'utils/Request';
import LoadingLayout from './LoadingLayout';

const ITEMS = Array.from({ length: 4 }, () => ({
  title: 'David Smith',
  subtitle: 'Senior Engineering Manager',
  body: 'Uber Everything',
  imgUrl: 'https://via.placeholder.com/60x60',
}));

const PetLayout = () => {
  const [loading, setLoading] = React.useState(true);
  const [pets, setPets] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    getWithToken("/api/pet")
    .then(res => {
      setPets(res.data);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    loading ?
    <LoadingLayout />
    :
    <StatefulMenu
      items={pets}
      onItemSelect={({item}) => {
        history.push("/pet/"+item.id);
      }}
      overrides={{
        List: {
          style: {
            width: '100%',
            ":focus": {
              outline: "none",
            }
          },
          
        },
        Option: {
          component: OptionProfile,
          props: {
            getProfileItemLabels: ({ name, swipes }) => ({
              title: name,
              subtitle: "Swipes: " + swipes
            }),
            getProfileItemImg: item => item.url,
            getProfileItemImgText: item => item.name,
          },
        },
      }}
    />
  );
}

export default PetLayout;