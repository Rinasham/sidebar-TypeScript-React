import "./styles.css";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <h1 style={{ margin: "0" }}>Side bar</h1>
        <h2>for 5th hackathon TeamD</h2>
      </div>
    </div>
  );
}
