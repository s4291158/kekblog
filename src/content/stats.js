import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SocialPerson from "material-ui/svg-icons/social/person";
import ImageRemoveRedEye from "material-ui/svg-icons/image/remove-red-eye";
import ActionThumbsUp from "material-ui/svg-icons/action/thumb-up";
import MapsDirections from "material-ui/svg-icons/maps/directions";

const style = {
  stats: {
    fontSize: 15,
    color: "#BDBDBD",
  },
  icon: {
    marginRight: 8,
    top: 6,
    position: "relative",
    color: "#BDBDBD"
  }
};

class Stats extends Component {
  render() {
    return (
      <div style={style.stats}>
        <div>
          <MuiThemeProvider>
            <SocialPerson
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>314 currently viewing</span>
          </span>
        </div>
        <div>
          <MuiThemeProvider>
            <ImageRemoveRedEye
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>74,123 total views</span>
          </span>
        </div>
        <div>
          <MuiThemeProvider>
            <ActionThumbsUp
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>4,501 total likes</span>
          </span>
        </div>
        <div>
          <MuiThemeProvider>
            <MapsDirections
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>216 total shares</span>
          </span>
        </div>
      </div>
    )
  }
}

export default Stats;