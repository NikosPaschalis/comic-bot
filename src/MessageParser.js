// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
    
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        const testCaseGreet = /hello|hi|γεια|geia|καλημερα|kalhmera|καλησπερα|kalhspera|morning/i;
        const testCaseDonald = /donald|duck|ντοναλντ|ντακ/i;
        let testCaseMickey = /mickey|mouse|μικυ|μαους/i;
        if (testCaseGreet.test(lowerCaseMessage)) {
          this.actionProvider.greet();
        }
        else if(testCaseDonald.test(lowerCaseMessage)){
          this.actionProvider.handleDonaldDuck();
        }
        else if(testCaseMickey.test(lowerCaseMessage)){
          this.actionProvider.handleMickeyMouse();
        }
          else{
          this.actionProvider.unknown();
        }
      }
    }
  
  export default MessageParser;