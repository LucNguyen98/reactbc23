const stateDefault = [];

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;
      let sp = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
      }
      return [...gioHang];
    }

    case "XOA_GIO_HANG": {
      let gioHang = state.filter((sp) => sp.maSP !== action.maSP);
      return [...gioHang];
    }

    case "TANG_GIAM_SO_LUONG": {
      let gioHang = state;
      let spGioHang = gioHang.find((sp) => sp.maSP === action.maSPCLick);
      if (spGioHang) {
        spGioHang.soLuong += action.soLuong || 0;
        if (spGioHang.soLuong <= 0) {
          alert("Số lượng không được nhỏ hơn 1");
          spGioHang.soLuong -= action.soLuong;
        }
      }
      return [...gioHang];
    }

    default:
      return state;
  }
};
