import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENTS = "CREATE_EVENTS";
export const DELETE_EVENTS = "DELETE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
export const read_events = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  console.log(response);
  dispatch({ type: READ_EVENTS, response });
};
export const post_events = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  console.log(response);
  dispatch({ type: CREATE_EVENTS, response });
};
export const delete_events = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/events/${id}/${QUERYSTRING}`);
  //   console.log(response);
  dispatch({ type: DELETE_EVENTS, id });
};
