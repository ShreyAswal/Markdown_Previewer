import React, { useRef } from "react";
import "./Editor.css";

const Editor = ({ setMarkdown, markdown, sync, darkMode }) => {
  const editorRef = useRef(null);
  const change = (e) => {
    setMarkdown(e.target.value);
  };

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const editorHeight = e.target.clientHeight;

    const scrollpercentage = (scrollTop / (scrollHeight - editorHeight)) * 100;
    const previewerContainer = document.getElementById("previewContainer");

    if (previewerContainer) {
      const previewHeight =
        previewerContainer.scrollHeight - previewerContainer.clientHeight;
      previewerContainer.scrollTop = (scrollpercentage * previewHeight) / 100;
    }
  };

  const darkTheme = {
    backgroundColor: darkMode ? "#000000" : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#000000",
    borderRight: darkMode ? "0.2em solid #FFFFFF" : "0.2em solid #000000"
  };

  return (
    <div id="editorContainer">
      <textarea
        ref={editorRef}
        id="editor"
        value={markdown}
        onChange={(e) => change(e)}
        onScroll={sync ? (e) => handleScroll(e) : () => {}}
        style={darkTheme}
      ></textarea>
    </div>
  );
};

export default Editor;
