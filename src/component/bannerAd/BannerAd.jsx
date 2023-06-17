import "./bannerads.scss";

import React from "react";

const BannerAd = (props) => {
  return(
  <div className="bnAds">
    <img src={props.img} alt="" />
    <h2>{props.head}</h2>
    <p>{props.para}</p>
  </div>
  )
};

export default BannerAd;
