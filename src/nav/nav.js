import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {lightBlue500} from "material-ui/styles/colors";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500
  },
  appBar: {
    height: 124,
  }
});

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        {...this.props}
        label="Login"
      />
    );
  }
}

class Logged extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>

    )
  }
}

class Nav extends Component {
  state = {
    logged: false,
  };

  loggedSetter = (event, logged) => {
    this.setState({logged: logged});
  };

  titleClick = (event) => {
    if (this.state.logged) {
      this.loggedSetter(event, false)
    } else {
      this.loggedSetter(event, true)
    }
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="The kek blog"
            titleStyle={{textAlign: "center"}}
            onTitleTouchTap={this.titleClick}
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Nav;