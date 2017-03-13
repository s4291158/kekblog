import React, {Component} from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import SocialPerson from "material-ui/svg-icons/social/person"
import ImageRemoveRedEye from "material-ui/svg-icons/image/remove-red-eye"
import ActionThumbsUp from "material-ui/svg-icons/action/thumb-up"
import MapsDirections from "material-ui/svg-icons/maps/directions"

import {firebase} from '../utils/firebase'

const FIREBASE_URL = '/stats'
const db = firebase.database()

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
}

class Stats extends Component {
  state = {
    current_views: undefined,
    total_views: undefined,
    total_likes: undefined,
    total_shares: undefined
  }
  componentDidMount () {
    this.ref = db.ref(FIREBASE_URL)
    this.ref.on('value', this.handleValue)
  }
  handleValue (snapshot) {
    const data = snapshot.val()
    this.setState(data)
  }
  componentWillUnmount () {
    this.ref.off('value', this.handleValue)
  }
  render() {
    const {current_views, total_views, total_likes, total_shares} = this.state
    return (
      <div style={style.stats}>
        <div>
          <MuiThemeProvider>
            <SocialPerson
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>{current_views ? `${current_views} currently viewing` : 'No Active Viewers'} </span>
          </span>
        </div>
        <div>
          <MuiThemeProvider>
            <ImageRemoveRedEye
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>{total_views} total views</span>
          </span>
        </div>
        <div>
          <MuiThemeProvider>
            <ActionThumbsUp
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>{total_likes} total likes</span>
          </span>
        </div>
        <div>
          <MuiThemeProvider>
            <MapsDirections
              style={style.icon}
            />
          </MuiThemeProvider>
          <span>
            <span>{total_shares} total shares</span>
          </span>
        </div>
      </div>
    )
  }
}

export default Stats
