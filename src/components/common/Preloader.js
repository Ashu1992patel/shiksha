import React from "react";

export const Preloader = () => {
  return (
    <>
      <div id="preloader">
        <div id="spinner">
          <i className="flaticon-charity-shelter font-60 text-theme-colored floating"></i>
          <h5 className="line-height-50 font-18">Loading...</h5>
        </div>
        <div id="disable-preloader" className="btn btn-default btn-sm">
          Disable Preloader
        </div>
      </div>
    </>
  );
};
