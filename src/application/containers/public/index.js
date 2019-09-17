import React, { Component } from "react";
import { publicPages } from "application/pages";
import { LayoutPublic } from "application/layout";
import { Content } from "./content";
import menus from "./menus";

export default class PublicPage extends Component {
  constructor(p) {
    super(p);
    const { location, history } = this.props;
    this.pages = publicPages;
    this.state = {
      activeMenuKey: [findMenuByPath(location.pathname, menus).key]
    };
    this.unlistenHistory = null;
  }

  componentDidMount() {
    const { history } = this.props;
    this.unlistenHistory = history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    this.unlistenHistory && this.unlistenHistory();
  }

  handleLocationChange = ({ pathname }) => {
    this.setActiveMenu(findMenuByPath(pathname, menus).key);
  };

  setActiveMenu = key => {
    this.setState({
      activeMenuKey: [key]
    });
  };

  onMenuClick = item => {
    const { history } = this.props;

    history.push(item.path);
  };

  render() {
    const { activeMenuKey } = this.state;
    return <LayoutPublic content={<Content pages={this.pages} />} />;
  }
}
