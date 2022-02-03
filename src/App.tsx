import { Link, Route, Switch } from "react-router-dom";
import TagDemo from "./demo/TagDemo";
import ClickToEditDemo from "./demo/ClickToEditDemo";
import ToggleDemo from "./demo/ToggleDemo";
import AutoCompleteDemo from "./demo/AutoCompleteDemo";
import TabDemo from "./demo/TabDemo";
import ModalDemo from "./demo/ModalDemo";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/Tab">Tab</Link>
          </li>
          <li>
            <Link to="/Toggle">Toggle</Link>
          </li>
          <li>
            <Link to="/Modal">Modal</Link>
          </li>
          <li>
            <Link to="/ClickToEdit">ClickToEdit</Link>
          </li>
          <li>
            <Link to="/Tag">Tag</Link>
          </li>
          <li>
            <Link to="/AutoComplete">AutoComplete</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/Tab" component={TabDemo} />
        <Route path="/Toggle" component={ToggleDemo} />
        <Route path="/Modal" component={ModalDemo} />
        <Route path="/ClickToEdit" component={ClickToEditDemo} />
        <Route path="/Tag" component={TagDemo} />
        <Route path="/AutoComplete" component={AutoCompleteDemo} />
      </Switch>
    </>
  );
}

export default App;
