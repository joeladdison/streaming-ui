import React from 'react';
import RoomOverview from './RoomOverview';

export default class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rooms: []
    };
    this.roomName = this.props.match.params.room
  }

  render() {
    const roomName = this.roomName;
    const { error, isLoaded, rooms } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        {rooms.filter((room) => room.id === roomName).map(room => (
          <RoomOverview room={room} />
        ))}
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
