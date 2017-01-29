import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const style = {
  bar: {
    position: "fixed"
  },
  title: {
    textAlign: "center"
  }
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#fff",
    alternateTextColor: "#000"
  }
});

class Nav extends Component {
  state = {
    logged: false,
  };

  titleClick = (event) => {
    if (this.state.logged) {
      this.setState({logged: false});
    } else {
      this.setState({logged: true});
    }
  };


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title=""
          onTitleTouchTap={this.titleClick}
          showMenuIconButton={false}
          zDepth={1}
          style={style.bar}
        />
        {/*iconElementRight={this.state.logged ? <Logged /> : <Login />}*/}
      </MuiThemeProvider>
    );
  }
}

export default Nav;