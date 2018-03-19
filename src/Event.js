import React from 'react';
import Moment from 'react-moment';

function Event(props) {
    return (
      <div>
        <span><strong>{props.when}</strong> - <Moment date={props.event.sta} /></span>
        <p><a href={props.event.abs}>{props.event.nam}</a></p>
        <p>by {props.event.aut}</p>
      </div>
    );
  }

export default Event;
