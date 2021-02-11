import setCurrentUser from "./userAction";
const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("user");
  // Remove auth header for future requests
  //setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false

  dispatch(setCurrentUser({}));
};

export default logoutUser;
