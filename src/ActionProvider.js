class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend 😄 Let me help you find your favourite comic");
      this.updateChatbotState(greetingMessage)
    }
    unknown(){
      const unknowngMessage = this.createChatBotMessage("Sorry I haven't learned this command yet! 😓 Please contact my master 🧞");
      this.updateChatbotState(unknowngMessage)
    }
    //Donald Duck handler
    handleDonaldDuck = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Donald Duck:",
        {
          widget: "Donald Duck",
        }
      );
  
      this.updateChatbotState(message);
    };
    //Mickey Mouse handler
    handleMickeyMouse = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Mickey Mouse:",
        {
          widget: "Mickey Mouse",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleResources = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Resources:",
        {
          widget: "Resources",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleEmptyItems = () =>{
      const message = this.createChatBotMessage(
        "Sorry i got no data for that at the moment 🥺",
      );
  
      this.updateChatbotState(message);
    }
    handleKomix = () =>{
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Komix:",
        {
          widget: "Komix",
        }
      );
  
      this.updateChatbotState(message);
    }
    updateChatbotState(message) {
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider