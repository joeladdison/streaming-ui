import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainNav from './MainNav';
import Dash from './Dash';
import { BrowserRouter, Route } from 'react-router-dom'
import RoomDetails from './RoomDetails';
import TwitterTimeline from 'react-twitter-embedded-timeline';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNav />
          <Container fluid="false">
            <Row>
              <Col xs="12" md="9">
                <Container fluid="false">
                  <Route path="/room/:room" component={RoomDetails}/>
                  <Route exact path="/" component={Dash} />
                </Container>
              </Col>
              <Col xs="12" md="3">
                <h2>Latest Updates</h2>
                <TwitterTimeline widgetId="sampleid" chrome="noborders noheader" height={"100%"}/>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    fetch("/dynamic/schedule.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rooms: result.rooms
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
}

export default App;
