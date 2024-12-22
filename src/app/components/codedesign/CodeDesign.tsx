import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeDesign() {
  const codeString = `
  const Developer = {
  name: "Fernando Cássio",
  skills: [
    "Java",
    "Spring",
    "TypeScript",
    "React",
    "Next.js"
    "Node.js",
    "SQL",
    "NoSQL",
    "Docker",
    "AWS",
    "GCP"
  ],
  hardWorker: true,
  quickLearner: true,
  hireable: function() {
    return (
    this.hardWorker &&
    this.quickLearner &&
    this.skills.length > 5;
    );
   }
  }
  `;
  return (
    <div>
      {/* do style code design */}
      <SyntaxHighlighter language="javascript" style={darcula} className="">
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeDesign;
