import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";
import Notes from "./components/Notes";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="float-container">
        <Todo /> <Notes />
      </div>
    </div>
  );
}

export default App;
