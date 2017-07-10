import * as ActionTypes from '../actions/actions';

const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.COUNTER_ADD_COUNT: {
      return {count: state.count + 1};
    }
    case ActionTypes.COUNTER_RESET_COUNT: {
      return {count: 0};
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;