import axios from 'axios';

export const getComic = async () => {
    const result = await axios.get("https://comic-bot-fe2f1.firebaseio.com/MickeyMouse.json").then((response) => response.data).catch(error => {
        ("Woops something went wrong on our end! I'm brewing some coffee and calling the master to fix it.");
      });
    return result;
}
export default getComic;