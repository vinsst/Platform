import React from "react";
import play from "../../assets/img/playLogin.svg";

function LeftVideo() {
  return (
    <div className="login_leftVideo">
      <img src={play} alt="" className="login__leftVideo_playButton" />
    </div>
  );
}

export default LeftVideo;
