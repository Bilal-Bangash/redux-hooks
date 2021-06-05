import { SET_FIRST_NAME, SET_LAST_NAME } from "../types";
export const updateFirstName = (firstName) => (dispatch) => {
  try {
    console.log(firstName);
    dispatch({
      type: SET_FIRST_NAME,
      payload: {
        firstName,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
export const updateLastName = (lastName) => (dispatch) => {
  try {
    console.log(lastName);
    dispatch({
      type: SET_LAST_NAME,
      payload: {
        lastName,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
