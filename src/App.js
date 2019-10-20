import React from 'react';
import Header from "./Components/Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./Components/EmojiResults";
import filterEmoji from "./filterEmoji";
import EmojiUploader from "./Components/EmojiUploader"


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filteredEmoji: filterEmoji("", 20),
  //     imagePath: "/images/steaming-bowl_1f35c.png",
  //   };
  // }

  // handleSearchChange = event => {
  //   this.setState({
  //     filteredEmoji: filterEmoji(event.target.value, 20)
  //   });
  // };

  // render() {
  //   return (
  //     <div>
  //       <Header headerImg={this.state.imagePath}/>
  //       <SearchInput textChange={this.handleSearchChange} />
  //       <div className="MainSection">
  //       <EmojiResults emojiData={this.state.filteredEmoji} />
  //       <AddEmoji/>
  //       </div>
  //     </div>
  //   );
  // }

  const App = () => (
    <div className='container'>
      <div>
         {/* <Header headerImg={this.state.imagePath}/>
         <SearchInput textChange={this.handleSearchChange} /> */}
         <div className="MainSection">
         {/* <EmojiResults emojiData={this.state.filteredEmoji} /> */}
         <EmojiUploader/>
         </div>
      </div>
    </div>
  );

export default App;
