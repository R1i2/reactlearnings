import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Tabs/TabButton";
import {CoreConcepts} from "./Components/CoreConcepts/CoreConcepts";
function App() {
  return (
    <div>
      <Header />
      <main>
      <CoreConcepts/>
        <Menu/>
      </main>
    </div>
  );
}
export default App;
