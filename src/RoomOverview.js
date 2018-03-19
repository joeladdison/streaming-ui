import React from 'react';
import { Row, Col } from 'reactstrap';
import * as moment from 'moment';
import Event from './Event';
import LiveStream from './LiveStream';

export default class RoomOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.calculateState(this.props.room);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 * 60 // every minute.
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var state = this.calculateState(this.state.room);
    this.setState(state);
  }

  calculateState(room) {
    let now = moment();
    var currentEventIndex = -1;

    for (var i = 0; i < room.events.length; ++i) {
      var start = moment(room.events[i].sta);
      var end = moment(room.events[i].end);
      if (now.isBetween(start, end)) {
        currentEventIndex = i;
        break;
      }
    }

    var state = {
      room: room,
      currentEvent: null,
      nextEvent: null,
    };

    if (currentEventIndex !== -1) {
      state.currentEvent = room.events[currentEventIndex];
      if (currentEventIndex + 1 < room.events.length) {
        state.nextEvent = room.events[currentEventIndex + 1];
      }
    }

    return state;
  }

  render() {
    const { room, currentEvent, nextEvent } = this.state;

    if (currentEvent && nextEvent) {
      return (
        <div>
          <h2><a href={"/room/" + room.id}>{room.name}</a></h2>
          <div class="embed-responsive embed-responsive-16by9">
            <LiveStream videoId={room.youtube} className="embed-responsive-item" />
          </div>
          <Row>
            <Col xs="12" sm="6">
              <Event when="Now" event={currentEvent} />
            </Col>
            <Col xs="12" sm="6">
              <Event when="Next" event={nextEvent} />
            </Col>
          </Row>
        </div>
      )
    } else if (currentEvent && !nextEvent) {
      return (
        <div>
          <h2><a href={"/room/" + room.id}>{room.name}</a></h2>
          <Event when="Now" event={currentEvent} />
        </div>
      )
    } else {
      return (
        <div>
          <h2><a href={"/room/" + room.id}>{room.name}</a></h2>
          <p>No events currently scheduled.</p>
        </div>
      );
    }
  }
}
