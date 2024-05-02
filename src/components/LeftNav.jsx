import React, { useState } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { toggleNav } from "../redux/actions";

import LeftNavCompo from "./LeftNavCompo";
import LeftNavCompoBottom from "./LeftNavCompoBottom";
import LeftNavUser from "../components/LeftNavUser";

import nav_left from "../assets/img/nav_left.svg";
import file_text from "../assets/img/file_text.svg";
import calendar from "../assets/img/calendar.svg";
import message_circle from "../assets/img/message_circle.svg";
import tabler_folder from "../assets/img/tabler_folder.svg";
import tabler_list_check from "../assets/img/tabler_list_check.svg";
import tabler_subtask from "../assets/img/tabler_subtask.svg";

function LeftNav() {
  const [LeftNavUserShowed, setLeftNavUserShowed] = useState(false);

  const showSidebar = () => setLeftNavUserShowed(!LeftNavUserShowed);

  const { showNav } = useSelector((state) => state.showingNavReducer);

  console.log(showNav);

  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleNav());
  };

  return (
    <>
      {showNav ? (
        <nav className="homeMain__left_nav_burger">
          <div className="homeMain__left_nav_top">
            <div className="homeMain__left_nav_logoBurger">
              <div className="homeMain__left_nav_logo">Logo</div>
              <div
                className="rightMain__content_routes_burger"
                onClick={handleBurgerClick}
              >
                <div className="rightMain__content_routes_burger_line"></div>
                <div className="rightMain__content_routes_burger_line"></div>
                <div className="rightMain__content_routes_burger_line"></div>
              </div>
            </div>

            <LeftNavCompo img={nav_left} text="Dashboard" />
            <LeftNavCompo img={tabler_folder} text="My Services" />
            <LeftNavCompo img={tabler_subtask} text="Operations" />
            <LeftNavCompo img={tabler_list_check} text="My Tasks" />
            <LeftNavCompo img={calendar} text="Calendar" />
            <LeftNavCompo img={file_text} text="Documents" />
            <LeftNavCompo img={message_circle} text="Chat" />
          </div>
          <LeftNavCompoBottom onClick={showSidebar} />
          {LeftNavUserShowed ? <LeftNavUser /> : <></>}
        </nav>
      ) : (
        <></>
      )}
      <nav className="homeMain__left_nav">
        <div className="homeMain__left_nav_top">
          <div className="homeMain__left_nav_logoBurger">
            <div className="homeMain__left_nav_logo">Logo</div>
            <div
              className="rightMain__content_routes_burger"
              onClick={handleBurgerClick}
            >
              <div className="rightMain__content_routes_burger_line"></div>
              <div className="rightMain__content_routes_burger_line"></div>
              <div className="rightMain__content_routes_burger_line"></div>
            </div>
          </div>

          <LeftNavCompo img={nav_left} text="Dashboard" />
          <LeftNavCompo img={tabler_folder} text="My Services" />
          <LeftNavCompo img={tabler_subtask} text="Operations" />
          <LeftNavCompo img={tabler_list_check} text="My Tasks" />
          <LeftNavCompo img={calendar} text="Calendar" />
          <LeftNavCompo img={file_text} text="Documents" />
          <LeftNavCompo img={message_circle} text="Chat" />
        </div>
        <LeftNavCompoBottom onClick={showSidebar} />
        {LeftNavUserShowed ? <LeftNavUser /> : <></>}
      </nav>
    </>
  );
}

export default LeftNav;
