import React, { Component } from "react";
import "./admin.css";

const titleStyle = {
  marginLeft: "20px",
  display: "flex",
  height: "100%",
  alignItems: "center"
};

const titleSpanStyled = {
  fontSize: "18px",
  textAlign: "left",
  color: "#2870b2",
  marginLeft: "20px",
  marginTop: "5px"
};
class LayoutAdmin extends Component {
  state = {
    siderOpen: false
  };

  toggleSider = () => {
    this.setState(state => ({
      siderOpen: !state.siderOpen
    }));
  };

  hideSider = () => {
    this.setState({
      siderOpen: false
    });
  };

  render() {
    const { header, content, sideContent } = this.props;
    const { siderOpen } = this.state;

    return <div>{content}</div>;
  }
}

export { LayoutAdmin };
