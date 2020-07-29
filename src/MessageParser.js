// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("hello")) {
          this.actionProvider.greet();
        }
        else if(lowerCaseMessage.includes("donald duck")){
          this.actionProvider.handleJavascriptList();
        }
        else if(lowerCaseMessage.includes("mickey mouse")){
          this.actionProvider.handleMickeyMouse();
        }
          else{
          this.actionProvider.unknown();
        }
      }
    }
  
  export default MessageParser;