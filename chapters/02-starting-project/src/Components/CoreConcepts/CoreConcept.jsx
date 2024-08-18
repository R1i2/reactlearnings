import {CORE_CONCEPTS} from "../../data";
import "./CoreConcepts.css";
function CoreConcept({image,title,description}){
    return(
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
}
export function CoreConceptContainer(){
    return(
        <>
        {
          CORE_CONCEPTS.map((coreConceptItem)=>(
              <CoreConcept key={coreConceptItem.title} {...coreConceptItem}/>
          ))
        }
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </>
    )
}