import "./App.css";
import Layout from "./Components/BTLayout/Layout";
import DataBinding from "./Components/DataBinding/DataBinding";
import HandleEvent from "./Components/HandleEvent/HandleEvent";

function App() {
  return (
    <div className="App">
      <Layout />
      <DataBinding/>
      <HandleEvent/>
    </div>
  );
}

export default App;
