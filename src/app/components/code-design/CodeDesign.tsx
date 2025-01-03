import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeDesign() {
  const codeString = `
  const softwareEngineer = {
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
    <div className="relative rounded-lg overflow-hidden mx-4">
      {/* Title Bar */}
      <div className="flex items-center justify-end bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-10 gap-5 px-4">
        {/* Buttons */}
        <button className="w-5 h-5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-4 h-4"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </button>
        <button className="w-5 h-5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-4 h-4"
          >
            <rect x="5" y="5" width="14" height="14" rx="1" />
          </svg>
        </button>
        <button className="w-5 h-5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-4 h-4"
          >
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
      </div>
      <div>
        {/* do style code design */}
        <SyntaxHighlighter language="javascript" style={materialDark} customStyle={{
            fontSize: "14px",
            margin: "0",
            padding: "0"
          }}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeDesign;
