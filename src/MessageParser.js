// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("hello")) {
          this.actionProvider.greet()
        }else if(lowerCaseMessage.includes("Donald Duck")){
          this.actionProvider.handleJavascriptList()
        }
          else{
          this.actionProvider.unknown()
        }
      }
    }
  
  export default MessageParser;