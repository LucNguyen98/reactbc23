const stateDefault = {
  banChon: true,
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
  ],
};
export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      return {
        ...state,
        banChon: action.banChon,
      };
    }
    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 1; i <= 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xxnn = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        mangXucXacNgauNhien.push(xxnn);
      }

      let tongDiem = mangXucXacNgauNhien.reduce((acc, current) => {
        return acc + current.diem;
      }, 0);

      if (
        (state.banChon && tongDiem > 11) ||
        (!state.banChon && tongDiem < 11)
      ) {
        state.soBanThang += 1;
      }

      return {
        ...state,
        mangXucXac: mangXucXacNgauNhien,
        soBanThang: state.soBanThang,
        tongSoBanChoi: state.tongSoBanChoi + 1,
        tongDiem,
      };
    }

    default:
      return state;
  }
};
