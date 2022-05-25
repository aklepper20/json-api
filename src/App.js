import "./styles/App.css";
import GetUser from "./components/GetUser";
import PostUser from "./components/PostUser";

function App() {
  return (
    <div className="App">
      <h2>Api User Profiles</h2>
      <GetUser />
      <PostUser />
    </div>
  );
}

export default App;
