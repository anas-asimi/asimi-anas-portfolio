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
      <nav className="nav">
        <ul>
          <li><a href="#" className="nav-item">Home</a></li>
          <li><a href="#" className="nav-item">About</a></li>
          <li><a href="#" className="nav-item">Skills</a></li>
          <li><a href="#" className="nav-item">Projects</a></li>
          <li><a href="#" className="nav-item">Contact</a></li>
        </ul>
        <div className="slider"></div>
      </nav>
      <div className="tools">buttons</div>
    </header>
  );
}
