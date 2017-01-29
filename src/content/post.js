import React, {Component} from "react";
import {Card, CardHeader, CardActions, CardText} from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import logo from '../logo.svg';

const style = {
  post: {
    paddingBottom: 25
  },
  body: {
    paddingTop: 0,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 16,
  },
  header: {
    paddingBottom: 5,
    title: {
      fontWeight: 600,
      fontSize: 16
    },
  },
  icon: {
    color: "#BDBDBD",
  }
};

class Post extends Component {
  render() {
    return (
      <div style={style.post}>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title={this.props.post.title}
              titleStyle={style.header.title}
              subtitle={this.props.post.date}
              avatar={logo}
              style={style.header}
            />
            <CardText
              style={style.body}
            >{this.props.post.body}
            </CardText>
            <CardActions>
              <IconButton>
                <ActionFavoriteBorder
                  color={style.icon.color}
                />
              </IconButton>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Post;