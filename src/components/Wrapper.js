import React from "react";
import MainContent from "./common/MainContent";
import MainFooter from "./common/MainFooter";
import MainHeader from "./common/MainHeader";
import { Preloader } from "./common/Preloader";

export default function Wrapper() {
  return (
    <>
      {/* preloader */}
      {/* <Preloader /> */}
      {/* Header */}
      <MainHeader />

      {/* Mian Content */}
      <MainContent />

      {/* Footer Starts */}
      <MainFooter />
      {/* Footer Ends */}

      <a className="scrollToTop" href="/">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
}
