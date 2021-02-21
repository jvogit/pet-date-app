import { Button } from 'baseui/button';
import { Upload } from 'baseui/icon';
import { StyledBody } from 'baseui/card';
import CenterCard from 'components/cards/CenterCard';
import * as React from 'react';
import ImageUploader from 'react-images-upload';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import axios, { postWithToken, requestWithToken } from "utils/Request";
import { useHistory } from 'react-router-dom';
import { useStyletron } from 'baseui';

const UploadPage = () => {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const [picture, setPicture] = React.useState(undefined);
  const [css, theme] = useStyletron();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("image", picture[0]);
    formData.append("meta", new Blob([JSON.stringify({ name, description })], { type: "application/json" }))
    requestWithToken("POST", "/api/pet/create/", { data: formData })
      .then(res => {
        console.log(res);
        history.push("/pet/" + res.data.id);
      });
  }

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
      <form 
        onSubmit={onSubmit}
        style={{
          width: "350px"
        }}
      >
        <FormControl label={"Upload a photo!"}>
          <ImageUploader
            singleImage={true}
            withPreview={true}
            fileContainerStyle={{
              backgroundColor: theme.colors.background
            }}
            onChange={setPicture}
          />
        </FormControl>
        <FormControl label={"Name of your Pet"}>
          <Input
            onChange={({ target }) => setName(target.value)}
          />
        </FormControl>
        <FormControl label={"Short description"}>
          <Input
            onChange={({ target }) => setDescription(target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          style={{
            width: "100%"
          }}
        >
          Submit
            </Button>
      </form>
    </section>
  );
};

export default UploadPage;