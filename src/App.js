import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import AddEmoji from "./AddEmoji";


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
      imagePath: "/images/steaming-bowl_1f35c.png",
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header headerImg={this.state.imagePath}/>
        <SearchInput textChange={this.handleSearchChange} />
        <div className="MainSection">
        <EmojiResults emojiData={this.state.filteredEmoji} />
        <AddEmoji/>
        </div>
      </div>
    );
  }
}
