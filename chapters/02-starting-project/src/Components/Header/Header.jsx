import Image from "../../assets/react-core-concepts.png";
import "./Header.css";

const descriptionArray = ["Funamental","Important","Crucial"];
const genRandomInt = function(max){
    return Math.floor(Math.random()*(max+1));
  }
export function Header(){
    const description = descriptionArray[genRandomInt(descriptionArray.length-1)];
    return(
      <header>
      <img src={Image} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }