import logo from "./logo.svg";
import "./App.css";
import CardRCC from "./Components/CardRCC";
import CardRFC from "./Components/CardRFC";
import BTLayout from "./Components/BTLayout/BTLayout";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import StyleComponent from "./StyleComponent/StyleComponent";
import RenderArray from "./RenderArray/RenderArray";
import DemoProps from "./Props/DemoProps/DemoProps";
import ShoesShop from "./Props/ShoesShop/ShoesShop";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import TangGIamSoLuong from "./DemoRedux/TangGiamSoLuong/TangGIamSoLuong";
import BaiTapChonXeRedux from "./DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux";
import GioHangRedux from "./DemoRedux/BaiTapGioHangRedux/GioHangRedux";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HeaderHome from "./Components/HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import BaiTapQuanLyNguoiDung from "./pages/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import DemoUseSate from "./hooks/DemoUseSate/DemoUseSate";
import DemoUseEffect from "./hooks/DemoUseEffect/DemoUseEffect";
import ApiRfc from "./pages/Api/DemoApi/ApiRfc";
import ApiRcc from "./pages/Api/DemoApi/ApiRcc";

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Switch>
        <Route
          exact
          path={"/home"}
          component={Home}
          // render={(propsRoute) => {
          //   // propsRoute : this.props.history | location | match
          //   return (
          //     <div>
          //       <HeaderHome />
          //       {/* <Home {...propsRoute} /> */}
          //     </div>
          //   );
          // }}
        />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/detail/:postid"} component={Detail} />
        <Route exact path={"/btqlnd"} component={BaiTapQuanLyNguoiDung} />
        <Route exact path={"/lifecycle"} component={LifeCycle} />
        <Route exact path={"/usestate"} component={DemoUseSate} />
        <Route exact path={"/useeffect"} component={DemoUseEffect} />
        <Route exact path={"/apircc"} component={ApiRcc} />
        <Route exact path={"/apirfc"} component={ApiRfc} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
