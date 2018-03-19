import React from 'react';
import { Row, Col } from 'reactstrap';
import RoomOverview from './RoomOverview';

export default class Dash extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        rooms: []
      };
    }

    render() {
      const { error, isLoaded, rooms } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            <h2>Rooms</h2>
            <Row>
              {rooms.map(room => (
                <Col xs="12" sm="12" md="6" xl="4" key={room.id}>
                  <RoomOverview room={room} />
                </Col>
              ))}
            </Row>
          </div>
        );
      }
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
