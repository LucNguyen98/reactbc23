import { combineReducers, createStore } from "redux";
import { stateNumber } from "./reducer/numberReducer";
import { stateImgCar } from "./reducer/imgCarReducer";
import { gioHangReducer } from "./reducer/gioHangReducer";
import { gameXucXacReducer } from "./reducer/gameXucXacReducer";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer";
const rootReducer = combineReducers({
  stateNumber,
  stateImgCar,
  stateGioHang: gioHangReducer,
  gameXucXacReducer,
  quanLyNguoiDungReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
