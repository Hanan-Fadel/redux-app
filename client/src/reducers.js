// reducers.js (Redux Reducer)
import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from './actions';

const initialState = {
  loading: false,
  profile: null,
  error: null
};

// Reducer function
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return { ...state, loading: true, error: null }; // Set loading to true
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, profile: action.payload }; // Store profile data and set loading to false
    case FETCH_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload }; // Store error and set loading to false
    default:
      return state; // Return current state
  }
};
