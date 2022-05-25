import "./styles/App.css";
import GetUser from "./components/GetUser";
import PostUser from "./components/PostUser";

function App() {
  return (
    <>
      <h2>Api User Profiles</h2>
      <div className="App">
        <PostUser />
        <GetUser />
      </div>
    </>
  );
}

export default App;
