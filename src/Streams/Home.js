import React from "react";
import logo from "../Assets/logo.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Icon, Label, List, Image, Header } from "semantic-ui-react";
import { fetchStreams } from "../Action";
import Slider from "../Components/Carousel";
import bestvideo1 from "../Assets/bestvideo.gif";
import "../AllCss/Row.css";
import { useSpring } from "react-spring";
import { Spring } from "react-spring/renderprops";

class home extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  //this is the video comp
  renderVideoShow() {
    return (
      <div className="left floated content">
        <img
          width="200"
          src={bestvideo1}
          controls
          style={{ marginBottom: 10, boxShadow: "3px 4px 2px #fcffff" }}
        />
      </div>
    );
  }
  // renderCreatedBy(stream) {
  //   return (
  //     <React.Fragment>
  //       <div className="right floated content" style={{ paddingLest: 20 }}>
  //         <Label animated as="a" color="teal" tag size="large">
  //           Created by : {stream.UserName}
  //         </Label>
  //       </div>
  //     </React.Fragment>
  //   );
  // }

  // renderAdmin(stream) {
  //   if (stream.userId === this.props.currentUserId) {
  //     return (
  //       <>
  //         <div className="right floated content">
  //           <Link
  //             to={`/streams/edit/${stream.id}`}
  //             className="ui button primary"
  //           >
  //             <Icon animated name="pencil" /> Edit
  //           </Link>
  //           <Link
  //             to={`/streams/delete/${stream.id}`}
  //             className="ui button negative"
  //           >
  //             Delete
  //           </Link>
  //         </div>
  //       </>
  //     );
  //   }
  // }

  renderCreate() {
    if (this.props.currentIsSignedIn) {
      return (
        <>
          <Link to="/streams/new" className="ui button primary">
            <Icon name="plus" />
            Create Stream
          </Link>
        </>
      );
    }
  }

  renderEmail() {
    if (this.props.currentIsSignedIn) {
      return (
        <>
          <Label as="a" size="meduim">
            <Image avatar spaced="right" src={this.props.currentUserImage} />
            {this.props.currentEmail}
          </Label>
        </>
      );
    }
  }
  renderList() {
    console.log("userImage", this.props.currentUserImage);
    return this.props.streams.map((stream) => {
      return (
        <>
          <List.Item key={stream.id} className="row-Stream">
            <Link to={`/streams/${stream.id}`}>
              {this.renderVideoShow(stream)}

              <Image
                avatar
                spaced="right"
                src={logo}
                style={{ marginBottom: 10 }}
              />
              <div className="content">
                <h4 style={{ color: "white", marginBottom: 15 }}>
                  {" "}
                  {stream.title}{" "}
                </h4>
              </div>
            </Link>
          </List.Item>
        </>
      );
    });
  }
  render() {
    console.log(this.props.streams);
    console.log("UserName", this.props.currentUserName);
    return (
      <>
        <div className="bg">
          <Slider />
          <Grid.Column width="13">
            <Grid columns={3}>
              <Grid.Row style={{ paddingLeft: 80, marginTop: 20 }}>
                <Grid.Column width="7"> {this.renderEmail()}</Grid.Column>
                <Grid.Column width="6"></Grid.Column>
                <Grid.Column width="3" className="right floated content">
                  {this.renderCreate()}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Spring
              from={{ opacity: 0, marginLeft: -1000 }}
              to={{ opacity: 1, marginLeft: 0 }}
            >
              {(props) => {
                return (
                  <>
                    <div className="List-of-stream" style={props}>
                      <Header as="h2" icon textAlign="center" inverted>
                        <Icon name="game" />
                        Gaming Streams
                      </Header>
                      <List raised className="row-Streams">
                        {this.renderList()}
                      </List>
                    </div>
                    <div className="List-of-stream" style={props}>
                      <Header as="h2" icon textAlign="center" inverted>
                        <Icon name="code" />
                        Coding Streams
                      </Header>
                      <List raised className="row-Streams">
                        {this.renderList()}
                      </List>
                    </div>
                    <div className="List-of-stream" style={props}>
                      <Header as="h2" icon textAlign="center" inverted>
                        <Icon name="tag" />
                        Exclusive Streams
                      </Header>
                      <List raised className="row-Streams">
                        {this.renderList()}
                      </List>
                    </div>
                    <div className="List-of-stream" style={props}>
                      <Header as="h2" icon textAlign="center" inverted>
                        <Icon name="newspaper" />
                        News{" "}
                      </Header>
                      <List raised className="row-Streams">
                        {this.renderList()}
                      </List>
                    </div>
                    <div className="List-of-stream" style={props}>
                      <Header as="h2" icon textAlign="center" inverted>
                        <Icon name="twitch" />
                        Recomandations
                      </Header>
                      <List raised className="row-Streams">
                        {this.renderList()}
                      </List>
                    </div>
                  </>
                );
              }}
            </Spring>
          </Grid.Column>
        </div>
      </>
    );
  }
}

const MapStateToProps = (state) => {
  const { userId, UserEmail, UserImage, UserName } = state.auth.UserProfile;
  return {
    streams: Object.values(state.streams),
    currentUserId: userId,
    currentIsSignedIn: state.auth.isSignedIn,
    currentEmail: UserEmail,
    currentUserImage: UserImage,
    currentUserName: UserName,
  };
};

export default connect(MapStateToProps, { fetchStreams })(home);
