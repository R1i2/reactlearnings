import Image from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data";
const descriptionArray = ["Funamental","Important","Crucial"];
const genRandomInt = function(max){
  return Math.floor(Math.random()*(max+1));
}
export function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
export function IteratorCoreConcept(props){
  if(props.size===CORE_CONCEPTS.length-1){
    return <CoreConcept {...CORE_CONCEPTS[props.size]}/>;
  }
  else{
    return(
    <>
      <CoreConcept {...CORE_CONCEPTS[props.size]}/>
      {IteratorCoreConcept({size:props.size-1})}
    </>)
  }
  // for(let items of CORE_CONCEPTS){
  //   return(<><CoreConcept {...items}/></>)
  // }
}
function Header(){
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
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <IteratorCoreConcept size={CORE_CONCEPTS.length-1}/> */}
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
