import React, { useContext, useState, useEffect } from "react";
import { Section } from "components";
import { AppContext } from "contexts/app";
import onClickOutside from "react-onclickoutside";

const FlexContainer = ({
  children,
  full,
  middle,
  center,
  start,
  end,
  top,
  bottom
}) => (
  <div
    style={{
      display: "flex",
      width: full ? "100%" : "initial",
      alignItems: middle ? "center" : "flex-start",
      justifyContent: center ? "center" : "flex-start"
    }}
  >
    {children}
  </div>
);

const UserAccountComponent = ({ goTo, onLogoutClick }) => {
  const { session } = useContext(AppContext);
  const { name } = session.getSession();
  const [visible, setVisible] = useState(false);

  const closeMenuOnEsc = e => {
    if (e.keyCode === 27) {
      closeMenu();
    }
  };
  const closeMenu = _ => setVisible(false);

  UserAccountComponent.clickOutside = closeMenu;
  useEffect(() => {
    document.addEventListener("keyup", closeMenuOnEsc);
    return () => {
      document.removeEventListener("keyup", closeMenuOnEsc);
    };
  }, []);

  return <div style={{ width: "40px", margin: "0 20px" }}>{name}</div>;
};
const clickOutsideConfig = {
  handleClickOutside: () => UserAccountComponent.clickOutside
};

const UserAccount = onClickOutside(UserAccountComponent, clickOutsideConfig);

const HeaderSession = () => (
  <div style={{ minHeight: "64px", width: "100%" }}>
    <Section name="admin-header" />
  </div>
);

export default ({ goTo, onLogoutClick }) => {
  return (
    <FlexContainer full middle>
      <HeaderSession />
      <UserAccount goTo={goTo} onLogoutClick={onLogoutClick} />
    </FlexContainer>
  );
};
