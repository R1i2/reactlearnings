import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Tabs/TabButton";
import { EXAMPLES } from "./data";
import { CoreConceptContainer } from "./Components/CoreConcepts/CoreConcept";
function handleClick(buttonPressed, setState) {
  setState(buttonPressed);
}
function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConceptContainer />
          </ul>
        </section>
        <section id="examples">
          <menu>
            {/* <Menu onSelect={handleClick} setState={setStateUpdatingFunction}/> */}
            <Menu setState={setStateUpdatingFunction} currState={currStateValue} />
          </menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
