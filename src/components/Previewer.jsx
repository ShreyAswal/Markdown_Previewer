import React from "react";
import "./Previewer.css";
import { marked } from "marked";

function Previewer({ markdown }) {
  return (
    <div id="previewContainer">
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
}

export default Previewer;
