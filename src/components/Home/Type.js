import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Quality Assurance Engineer",
          "Automation Testing",
          "Performance & Load Testing",
          "AI Apps (Azure + LLMs)",
          "Backend & Cloud (AWS)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
