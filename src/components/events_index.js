import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { read_events } from "../actions";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.read_events();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }
  render() {
    // const props = this.props;
    return (
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
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { read_events };
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
