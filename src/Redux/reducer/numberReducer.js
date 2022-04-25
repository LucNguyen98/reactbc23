export const stateNumber = (state = 1, action) => {
  switch (action.type) {
    case "TANG_GIAM_SO_LUONG":
      state = state + (action.soLuong || 0);
      return state;

    default:
      return state;
  }
};
