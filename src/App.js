import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
      
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
