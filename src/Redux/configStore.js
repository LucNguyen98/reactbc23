import { combineReducers, createStore, applyMiddleware } from "redux";
import { stateNumber } from "./reducer/numberReducer";
import { stateImgCar } from "./reducer/imgCarReducer";
import { gioHangReducer } from "./reducer/gioHangReducer";
import { gameXucXacReducer } from "./reducer/gameXucXacReducer";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer";
import { taskReducer } from "./reducer/taskReducer";
import { toDoListReducer } from "./reducer/toDoListReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  stateNumber,
  stateImgCar,
  stateGioHang: gioHangReducer,
  gameXucXacReducer,
  quanLyNguoiDungReducer,
  taskReducer,
  toDoListReducer,
});

const middleWare = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
