const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matkhau: "123456",
      hoTen: "nguyễn văn a",
      soDienThoai: "090909090",
      email: "nguyenvana@gmail.com",
      loaiNguoiDung: "QuanTri",
    },
  ],
  nguoiDungSua: {},
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_KY": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }

    case "XOA_NGUOI_DUNG": {
      state.mangNguoiDung = state.mangNguoiDung.filter(
        (nd) => nd.taiKhoan !== action.taiKhoan
      );
      return { ...state };
    }

    case "SUA_NGUOI_DUNG": {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }

    case "CAP_NHAT_THONG_TIN": {
      // let mangNguoiDung = [...state.mangNguoiDung];
      // let indexNguoiDung = mangNguoiDung.findIndex(
      //   (nd) => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      // );

      // mangNguoiDung[indexNguoiDung] = { ...action.nguoiDungCapNhat };

      let mangNguoiDung = [...state.mangNguoiDung];
      let nguoiDungUpdate = mangNguoiDung.find(
        (nd) => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      );

      for (const key in nguoiDungUpdate) {
        nguoiDungUpdate[key] = action.nguoiDungCapNhat[key];
      }
      return { ...state, mangNguoiDung };
    }

    default:
      return state;
  }
};
