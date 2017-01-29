import React, {Component} from "react";

const style = {
  about: {
    color: "rgba(0,0,0,.5)",
    title: {
      fontSize: 15,
      marginBottom: 0
    },
    body: {
      fontSize: 14,
      marginTop: 5
    }
  }
};

const about = {
  "title": "About title",
  "body": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
};

class About extends Component {
  render() {
    return (
      <div style={style.about}>
        <h4 style={style.about.title}>{about.title}</h4>
        <p style={style.about.body}>{about.body}</p>
      </div>
    )
  }
}

export default About;