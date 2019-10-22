import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "../CSS/EmojiResults.css";

const EmojiResults = (props) => {
  const [nameState , setNameState] = useState(props)

  useEffect(() => {
    //setNameState(props.emojiData);
}, [props])

  // static propTypes = {
  //   emojiData: PropTypes.array
  // };

  // componentDidMount() {
  //   this.clipboard = new Clipboard(".copy-to-clipboard");
  // }

  // componentWillUnmount() {
  //   this.clipboard.destroy();
  // }
    return (
      <div className="component-emoji-results" style={{width:"50%"}}>
        {nameState.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
)
}

export default EmojiResults;
