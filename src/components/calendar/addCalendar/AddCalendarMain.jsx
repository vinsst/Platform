import React from "react";
import { useSelector } from "react-redux";

import RightMainRoutes from "../../RightMainRoutes";
import BackNext from "./BackNext";
import AddNumberLine from "./AddNumberLine";
import General from "./General";
import Groups from "./Groups";

function AddCalendarMain() {
  const { lineNumCalendar } = useSelector(
    (state) => state.calendar.counterLinesCalendarReducer
  );
  let componentToRender;

  switch (lineNumCalendar) {
    case 1:
      componentToRender = <General />;
      break;
    case 2:
      componentToRender = <Groups />;
      break;
    // case 3:
    //   componentToRender = <AddUsers />;
    //   break;
    // case 4:
    //   componentToRender = <AddAutomation />;
    //   break;
    default:
      componentToRender = <General />;
      break;
  }
  return (
    <div className="rightMain_container container">
      <div className="rightMain_content">
        <RightMainRoutes
          routeName="Calendar"
          routeLabel="Add Calendar"
          showBurger
        />
        <div className="addRightMain_h1">Add Calendar</div>
        <AddNumberLine />
        {componentToRender}
        <BackNext />
      </div>
    </div>
  );
}

export default AddCalendarMain;
