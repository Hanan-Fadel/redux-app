// actions.js (Redux Actions)
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

// Action creators
export const fetchProfileRequest = () => ({ type: FETCH_PROFILE_REQUEST });
export const fetchProfileSuccess = (profile) => ({ type: FETCH_PROFILE_SUCCESS, payload: profile });
export const fetchProfileFailure = (error) => ({ type: FETCH_PROFILE_FAILURE, payload: error });

// Async action to fetch user profile
export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch(fetchProfileRequest()); // Dispatch request action
    try {
      const response = await fetch('http://localhost:5000/api/user/profile');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchProfileSuccess(data)); // Dispatch success action with fetched data
    } catch (error) {
      dispatch(fetchProfileFailure(error.message)); // Dispatch failure action with error message
    }
  };
};
