import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const READ_EVENT = "READ_EVENT";
export const CREATE_EVENTS = "CREATE_EVENTS";
export const DELETE_EVENTS = "DELETE_EVENTS";
export const UPDATE_EVENTS = "UPDATE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
export const read_events = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};
export const post_events = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);

  dispatch({ type: CREATE_EVENTS, response });
};

export const put_events = (values) => async (dispatch) => {
  const response = await axios.put(
    `${ROOT_URL}/events/${values.id}/${QUERYSTRING}`,
    values
  );
  dispatch({ type: UPDATE_EVENTS, response });
};

export const delete_events = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/events/${id}/${QUERYSTRING}`);
  dispatch({ type: DELETE_EVENTS, id });
};
export const get_events = (id) => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events/${id}/${QUERYSTRING}`);
  dispatch({ type: READ_EVENT, response });
};
