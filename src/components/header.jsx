import React from "react";

export default function header() {
  return (
    <header>
      <div className="brand">
        <span className="curly-bracket">{"{"}</span>
        <span className="brand-name">
          A<span className="brand-name__sub">nas&nbsp;</span>A
          <span className="brand-name__sub">simi</span>
        </span>
        <span className="curly-bracket">{"}"}</span>
      </div>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div className="slider"></div>
      </nav>
      <div className="tools">buttons</div>
    </header>
  );
}
