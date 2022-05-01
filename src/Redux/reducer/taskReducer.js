const stateDefault = {
  data: [],
  isLoading: false,
  error: null,
};

export const taskReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_TASKS_PENDING": {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case "GET_TASKS_FULFILLED": {
      return { ...state, isLoading: false, data: action.data };
    }

    case "GET_TASKS_REJECTED": {
      state.data = action.data;
      return { ...state, isLoading: false, error: action.error };
    }

    default:
      return state;
  }
};
