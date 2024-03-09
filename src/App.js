import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import InitialMarkdown from "./components/InitialMarkdown";
import githubImage from "./components/Github_image.png"

const App = () => {
  // console.log(defaulttext[7]);
  const [markdown, setMarkdown] = useState(InitialMarkdown);
  const [sync, setSync] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  console.log(githubImage)

  const handleSyncChange = () => {
    setSync(!sync);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode === true) {
    }
  });

  const workstyle = {
    // height:"78vh",
    bottom: "0.2em",
    display: "flex",
    flexDirection: "Row",
    padding: "0.2em",
    justifyContent: "Center",
    border: "0.2em solid black",
    overflowY: "hidden",
    overflowX: "hidden",
    position: "fixed",
    inset: "14.5vh 0.2em 0.2em 0.2em",
  };

  const settingstyle = {
    height: "2.2vmax",
    minHeight: "2vmax",
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "Center",
    position: "relative",
    marginBottom: "0.2em",
    padding: "0 1vmin",
    color:"#FFFFFF"
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  const light = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.8vmax",
          ...(darkMode ? dark : light),
        }}
      >
        Markdown Previewer!
      </h1>
      <div className="settings" style={settingstyle}>
        <div>
          <input type="checkbox" id="sync" onChange={handleSyncChange}></input>
          <label htmlFor="sync">Sync Scrolling</label>
          <input
            type="checkbox"
            id="theme"
            onChange={handleThemeChange}
          ></input>
          <label htmlFor="theme">Dark Theme</label>
        </div>
        <div>
          <a
            href="https://github.com/ShreyAswal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubImage} alt="github_link" style={{width:"2.4vmin",marginTop:"0.2em"}}></img>
          </a>
        </div>
      </div>
      <div
        className="workspace"
        style={{ ...workstyle, ...(darkMode ? dark : light) }}
      >
        <Editor
          setMarkdown={setMarkdown}
          markdown={markdown}
          sync={sync}
          darkMode={darkMode}
        />
        <Previewer markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
