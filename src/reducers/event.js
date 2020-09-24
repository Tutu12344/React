import { READ_EVENTS, DELETE_EVENTS } from "../actions";
import _ from "lodash";
import actions from "redux-form/lib/actions";
// const initialState = { value: 0 };

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data);
      // console.log(_.mapKeys(action.response.data, "id"));
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENTS:
      // console.log(action.id);
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
