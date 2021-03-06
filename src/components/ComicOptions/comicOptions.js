import React from "react";

import "./comicOptions.css";

const ComicOptions = (props) => {
  const options = [
    {
      text: "Donald Duck",
      handler: props.actionProvider.handleDonaldDuck,
      id: 1,
    },
    {
      text: "Mickey Mouse",
      handler: props.actionProvider.handleMickeyMouse,
      id: 2,
    },
    {
      text: "Komiξ",
      handler: props.actionProvider.handleKomix,
      id: 3,
    },
    {
      text: "Classics",
      handler: props.actionProvider.handleKlasika,
      id: 4,
    },
    {
      text: "Various",
      handler: props.actionProvider.handleVarious,
      id: 5,
    }  
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="Comic-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="Comic-options-container">{optionsMarkup}</div>;
};

export default ComicOptions;