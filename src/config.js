import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import ComicOptions from './components/ComicOptions/comicOptions.js';
import ServerList from './components/ServerList/ServerList';
import ServerList2 from './components/ServerList2.0/ServerList2';

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
      backgroundColor: "#1F1B24 ",
    },
    chatButton: {
      backgroundColor: "#1F1B24",
    },
  },
 widgets: [
     {
     	widgetName: "ComicOptions",
    	widgetFunc: (props) => <ComicOptions {...props} />,
     },
     {
      widgetName: "Donald Duck",
      widgetFunc: (props) => <ServerList {...props} />,
      props: {
        name: "DonaldDuck"
      }
    },
    {
      widgetName: "Mickey Mouse",
      widgetFunc: (props) => <ServerList {...props}/>,
      props: { name: "MickeyMouse"}
    },
    {
      widgetName: "Komix",
      widgetFunc: (props) => <ServerList {...props}/>,
      props: { name: "Komix"}
    },
    {
      widgetName: "Various",
      widgetFunc: (props) => <ServerList {...props}/>,
      props: { name: "Various"}
    },
    {
      widgetName: "klasika",
      widgetFunc: (props) => <ServerList2 {...props}/>,
      props: { name: "Klassika"}
    }
 ]
}

export default config