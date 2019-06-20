import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Header.css";

export default class Header extends PureComponent {
  static propTypes = {
    headerImg: PropTypes.string
  };
  render() {
    return (
      <header className="component-header">
          <img
          src={this.props.headerImg}
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
