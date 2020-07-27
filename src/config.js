import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import ComicOptions from './components/ComicOptions/comicOptions.js';
import LinkList from './components/LinkList/LinkList';

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
      widgetName: "DonaldDuckLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Ντόναλντ 01",
            url:
              "https://e.issuu.com/issuu-reader3-embed-files/latest/twittercard.html?u=argiriskouvelas&d=donald_01",
            id: 1,
          },
          {
            text: "Ντόναλντ 02",
            url:
              "https://e.issuu.com/issuu-reader3-embed-files/latest/twittercard.html?u=argiriskouvelas&d=donald_02",
            id: 2,
          },
          {
            text: "Ντόναλντ 03",
            url: "https://e.issuu.com/issuu-reader3-embed-files/latest/twittercard.html?u=argiriskouvelas&d=donald_03",
            id: 3,
          },
        ],
      },
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
      
    }
 ]
}

export default config