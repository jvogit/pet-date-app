import { React, useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider, LightTheme, DarkTheme, } from "baseui";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Swipe from "pages/Swipe";
import AdoptableSwiper from "pages/AdoptableSwiper";
import DateSwiper from "pages/DateSwiper";
import Adoption from "pages/Adoption";
import AppNavbar from "components/navbar/AppNavbar";
import { DARK_THEME } from "utils/appConsts";
import Footer from "./layouts/FooterLayout";
import "components/App.css";
import AuthorizedRoute from "./routes/AuthorizedRoute";
import UploadPage from "pages/UploadPage";
import Pet from "pages/Pet";
import UserPets from "pages/UserPets";

const engine = new Styletron();

export const App = ({ history }) => {
  const [theme, setTheme] = useState(localStorage.getItem(DARK_THEME) ? DarkTheme : LightTheme);

  useEffect(() => {
    document.body.style.background = theme.colors.backgroundPrimary;
    if (theme === DarkTheme) localStorage.setItem(DARK_THEME, true);
    else localStorage.removeItem(DARK_THEME);
  }, [theme]);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Router history={history}>
            <AppNavbar toggleTheme={() => setTheme(theme === DarkTheme ? LightTheme : DarkTheme)} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/swipe" exact component={Swipe} />
              <AuthorizedRoute path="/swiper" exact component={AdoptableSwiper} />
              <AuthorizedRoute path="/dateswiper" exact component={DateSwiper} />
              <AuthorizedRoute path="/user/pets" exact component={UserPets} />
              <Route path="/adoption" exact component={Adoption} />
              <AuthorizedRoute path="/upload" exact component={UploadPage} />
              <Route path="/pet/:id" component={Pet} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;