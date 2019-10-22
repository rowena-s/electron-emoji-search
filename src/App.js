import React, {useState} from 'react';
import Header from "./Components/Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./Components/EmojiResults";
import filterEmoji from "./filterEmoji";
import emojiList from "./emojiList.json"
import EmojiUploader from "./Components/EmojiUploader"


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filteredEmoji: filterEmoji("", 20),
  //     imagePath: "/images/steaming-bowl_1f35c.png",
  //   };
  // }

  
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
      
const App = () => {
        const [emoji, filterEmoji] = useState(emojiList);
        
    return (
    <div className='container'>
      <div>
         <Header />
         <SearchInput />
         <div className="MainSection">
         <EmojiResults emojiData={emoji} />
         <EmojiUploader/>
         </div>
      </div>
    </div>
    );
  };

export default App;
