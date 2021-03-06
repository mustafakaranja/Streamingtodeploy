import React from "react";
import { Link } from "react-router-dom";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Icon,
  Image,
} from "semantic-ui-react";
import logo from "../Assets/logo.png";

const FooterForAll = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ padding: "4em 0em", background: "#000b0c" }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5} centered>
                <Header
                  as="he"
                  icon
                  textAlign="center"
                  inverted
                  style={{ padding: 15, marginTop: 30 }}
                >
                  <Image
                    style={{
                      width: 150,
                      marginBottom: 30,
                      borderRadius: "1rem",
                    }}
                    src={logo}
                    alt="Best entertainment"
                  />
                  <Header.Content> Best Entertainment</Header.Content>
                  <Header.Content
                    as="a"
                    style={{ padding: 10, marginBottom: 20, fontSize: 12 }}
                  >
                    <p as="a">
                      {" "}
                      Web Appliction that runs all streaming Platforms on a
                      single server as a host, using Javascript ,Json & cloud
                      computing.{" "}
                    </p>
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header inverted as="h4" content="Project Team" />
                <List link inverted>
                  <List.Item as="a">Mustafa Yusuf Karanjawala</List.Item>
                  <p> Project Administrator | Full-stuck Developer </p>
                  <List.Item as="a">Raghav Agasti </List.Item>
                  <p> DataBase Executor </p>
                  <List.Item as="a">Deepali Bhoyar</List.Item>
                  <p> Software Testing | Document Controller </p>
                  <List.Item as="a">Deepali Mahajan</List.Item>
                  <p> RTMS Controller | Document Controller </p>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as={Link} to="/">
                    <List.Icon name="home" />
                    <List.Content>Home</List.Content>
                  </List.Item>
                  <List.Item as={Link} to="/Streamlist">
                    <List.Icon name="video" />
                    <List.Content>All Stream</List.Content>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/mustafakaranja/Streamingtodeploy"
                    target="_blank"
                  >
                    <List.Icon name="github" />
                    <List.Content>Github Code</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default FooterForAll;
