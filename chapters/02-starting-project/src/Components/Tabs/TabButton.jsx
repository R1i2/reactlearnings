import { useState,Fragment } from "react";
import { EXAMPLES } from "../../data";
import {Section} from "../Sections/Section";
import {Tabs} from "./Tabs";
export function TabButton({isSelected,...props}){
    return(
        <li>
            <button className= {isSelected?"active":""} {...props}>{props.children}</button>
        </li>
    )
}
export function Menu(){
    const [currStateValue, setStateUpdatingFunction] = useState();
    let tabContent;
    if (currStateValue) {
        tabContent = (
        <>
            <h3>{EXAMPLES[currStateValue].title}</h3>
            <p>{EXAMPLES[currStateValue].description}</p>
            <pre>
            <code>{EXAMPLES[currStateValue].code}</code>
            </pre>
        </>
        );
    } else {
        tabContent = <p>Please select a button to see action.</p>;
    }
    return (
      <Section id="examples" title="Examples">
        <Tabs
          ButtonsContainer="menu"
          buttons={
            <Fragment>
              <TabButton
                isSelected={currStateValue === "components"}
                onClick={() => setStateUpdatingFunction("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={currStateValue === "jsx"}
                onClick={() => setStateUpdatingFunction("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={currStateValue === "props"}
                onClick={() => setStateUpdatingFunction("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={currStateValue === "state"}
                onClick={() => setStateUpdatingFunction("state")}
              >
                State
              </TabButton>
            </Fragment>
          }
        >
          <div id="tab-content">{tabContent}</div>
        </Tabs>
      </Section>
    );
}