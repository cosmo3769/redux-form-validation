import FormComponent from "./components/FormComponent";

function App() {
  const submit = values => {
    console.log(values)
  }
  return (
    <div className="App">
	      <FormComponent onSubmit={submit} />
    </div>
  );
}

export default App;
