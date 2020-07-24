import React from "react";

import "./comicOptions.css";

const ComicOptions = (props) => {
  const options = [
    { text: "Donald Duck", handler: () => {}, id: 1 },
    { text: "Micky Mouse", handler: () => {}, id: 2 },
    { text: "Komix", handler: () => {}, id: 3 },
    { text: "Various", handler: () => {}, id: 4 },
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