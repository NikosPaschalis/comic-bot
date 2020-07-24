import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import ComicOptions from './components/ComicOptions/comicOptions.js';
const config = {
  botName: "ComicBot",
  initialMessages: [
      createChatBotMessage(`Hello I'm ComicBot 🧙 I'm here to help you find your favourite Disney comics 📚`
  , {
    widget: "ComicOptions",
  }),
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
 widgets: [
     {
     	widgetName: "ComicOptions",
    	widgetFunc: (props) => <ComicOptions {...props} />,
     },
 ]
}

export default config