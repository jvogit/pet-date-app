import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, } from "react-router-dom";
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
  ALIGN,
} from "baseui/header-navigation";
import { Avatar } from "baseui/avatar";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { Button, KIND, SIZE } from "baseui/button";
import { ChevronDown } from "baseui/icon";
import { LOGOUT_REQUEST } from "utils/storeConsts";
import LoginModal from "components/modals/LoginModal";
import { HeadingXSmall } from "baseui/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "baseui/icon";
import { Drawer } from 'baseui/drawer';
import { Accordion, Panel } from 'baseui/accordion';

const MobileNavButton = (props) => {
  return (
    <Button
      {...props}
      $style={{
        width: "100%"
      }}
    >
      {props.children}
    </Button>
  );
}

const MobileNavbar = ({ user, logout, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <HeaderNavigation
      style={{
        padding: "10px",
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit", }}>
            <HeadingXSmall $style={{ margin: "0" }} >Pet Date App</HeadingXSmall>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button
            kind={KIND.minimal}
            size={SIZE.compact}
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={faLightbulb} />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button
            kind={KIND.minimal}
            size={SIZE.mini}
            onClick={() => setOpen(true)}
          >
            <Menu size={32} />
          </Button>
          <Drawer
            isOpen={open}
            renderAll
            onClose={() => setOpen(false)}
          >
            <div
              style={{
                display: "block",
                padding: "10px"
              }}
            >
              <MobileNavButton
                onClick={() => {
                  history.push("/adoption");
                  setOpen(false);
                }}
              >
                How to Adopt?
              </MobileNavButton>
              <MobileNavButton
                onClick={() => {
                  history.push("/swiper")
                  setOpen(false);
                }}
              >
                Animal Swiper
              </MobileNavButton>
              <MobileNavButton
                onClick={() => {
                  history.push("/dateswiper")
                  setOpen(false);
                }}
              >
                Date Swiper
              </MobileNavButton>
              {
                user ?
                  <Accordion>
                    <Panel title="Profile">
                      <MobileNavButton
                        onClick={() => {
                          history.push("/user/pets");
                          setOpen(false);
                        }}
                      >
                        My Pets
                  </MobileNavButton>
                      <MobileNavButton
                        onClick={() => {
                          logout();
                          window.location.reload();
                        }}
                      >
                        Logout
                  </MobileNavButton>
                    </Panel>
                  </Accordion>
                  :
                  <MobileNavButton
                    onClick={() => {
                      history.push("/login");
                      setOpen(false);
                    }}
                  >
                    Login
              </MobileNavButton>
              }
            </div>
          </Drawer>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: LOGOUT_REQUEST }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavbar);