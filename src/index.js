import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Content from "./content/content";
import Nav from "./nav/nav";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const style = {
  content: {
    background: "#fafafa",
    paddingTop: 64
  }
};

ReactDOM.render(
  (
    <div>
      <div id="nav"/>
      <div id="content" style={style.content}/>
    </div>
  ),
  document.getElementById('root')
);

ReactDOM.render(
  <Nav/>,
  document.getElementById('nav')
);

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
