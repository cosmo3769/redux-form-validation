import FormComponent from "./components/FormComponent";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation";

function App() {
  // const submit = values => {
  //   console.log(values)
  // }
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
	      {/* <FormComponent onSubmit={submit} /> */}
    </div>
  );
}

export default App;
