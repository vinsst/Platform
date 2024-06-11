import React from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from "../../../redux/actions";
import hatRoutes from "../../../assets/img/hatRoutes.svg";

function RightMainRoutes() {
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleNav());
  };

  return (
    <div className="rightMain__content_routes">
      <div className="rightMain__content_routes_content">
        <img src={hatRoutes} alt="" className="rightMain__content_img" />
        <span className="rightMain__content_slash rightMain__content_routeName_lighter">
          /
        </span>
        <span className="rightMain__content_routeName rightMain__content_routeName_lighter">
          My Services
        </span>
        <span className="rightMain__content_slash rightMain__content_routeName_lighter">
          /
        </span>
        <span className="rightMain__content_routeName ">My Service #1</span>
      </div>
      <div
        className="rightMain__content_routes_burger"
        onClick={handleBurgerClick}
      >
        <div className="rightMain__content_routes_burger_line"></div>
        <div className="rightMain__content_routes_burger_line"></div>
        <div className="rightMain__content_routes_burger_line"></div>
      </div>
    </div>
  );
}

export default RightMainRoutes;
