import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import ComicOptions from './components/ComicOptions/comicOptions.js';
import LinkList from './components/LinkList/LinkList';
import ServerList from './components/ServerList/ServerList';

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
     {
      widgetName: "Donald Duck",
      widgetFunc: (props) => <ServerList {...props} />,
      props: {
        name: "DonaldDuck"
      }
    },
    {
      widgetName: "Resources",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Facebook Fan Page",
            url:
              "https://www.facebook.com/groups/grcomicpdf/"
            
          },
          {
            text: "Smilefreeware",
            url: "http://users.sch.gr/vasanagno/comics.html"
          }
        ]
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
 ]
}

export default config