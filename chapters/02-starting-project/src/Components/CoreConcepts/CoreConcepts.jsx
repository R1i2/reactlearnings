import { CoreConceptContainer } from "./CoreConcept";
import {Section} from "../Sections/Section";
export function CoreConcepts(){
    return(
    <Section id="core-concepts" title="Core Concepts">
        <ul>
          <CoreConceptContainer />
        </ul>
    </Section>
    )
}