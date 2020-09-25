import {
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENTS,
  UPDATE_EVENTS,
  CREATE_EVENTS,
} from "../actions";
import _ from "lodash";
import actions from "redux-form/lib/actions";
// const initialState = { value: 0 };

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENTS:
      delete events[action.id];
      return { ...events };
    case CREATE_EVENTS:
    case READ_EVENT:
    case UPDATE_EVENTS:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    default:
      return events;
  }
};
