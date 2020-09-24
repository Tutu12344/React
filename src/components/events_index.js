import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { read_events } from "../actions";
import { Link } from "react-router-dom";
class EventsIndex extends Component {
  componentDidMount() {
    this.props.read_events();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>

        <td>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  }
  render() {
    // const props = this.props;
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { read_events };
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
