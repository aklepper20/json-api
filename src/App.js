import "./styles/App.css";
import GetUser from "./components/GetUser";
import PostUser from "./components/PostUser";

function App() {
  return (
    <>
      <h1>API USERS</h1>
      <div className="App">
        <PostUser />
        <GetUser />
      </div>
    </>
  );
}

export default App;
