import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/chats" component={Chatpage} />
      <Route path="/" component={Homepage} exact />
    </div>
  );
}

export default App;
