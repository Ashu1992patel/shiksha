import React, { Component } from "react";

export default class MainHeader extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header-top bg-theme-colored sm-text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div className="widget no-border m-0">
                    <ul className="styled-icons icon-dark icon-theme-colored icon-sm sm-text-center">
                      <li>
                        <a href="/">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="widget no-border m-0">
                    <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                      <li className="m-0 pl-10 pr-10">
                        {" "}
                        <i className="fa fa-phone text-white"></i>{" "}
                        <a className="text-white" href="/">
                          123-456-789
                        </a>{" "}
                      </li>
                      <li className="text-white m-0 pl-10 pr-10">
                        {" "}
                        <i className="fa fa-clock-o text-white"></i> Mon-Fri
                        8:00 to 2:00{" "}
                      </li>
                      <li className="m-0 pl-10 pr-10">
                        {" "}
                        <i className="fa fa-envelope-o text-white"></i>{" "}
                        <a className="text-white" href="/">
                          contact@yourdomain.com
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="widget no-border m-0">
                    <ul className="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                      <li className="mt-sm-10 mb-sm-10">
                        {/*
                                    <!-- Modal: Appointment Starts -->*/}
                        <a
                          className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10 ajaxload-popup"
                          href="ajax-load/donation-form.html"
                        >
                          Donate Now
                        </a>
                      </li>
                      <li className="mt-sm-10 mb-sm-10">
                        <a
                          className="btn btn-default btn-flat btn-xs bg-light p-5 font-11 pl-10 pr-10 ajaxload-popup"
                          href="ajax-load/volunteer-apply-form.html"
                        >
                          Join Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
              <div className="container">
                <nav id="menuzord-right" className="menuzord green no-bg">
                  <a
                    className="menuzord-brand pull-left flip"
                    href="javascript:void(0)"
                  >
                    <img src="images/logo-wide.png" alt="" />
                  </a>
                  <ul className="menuzord-menu">
                    <li className="active">
                      <a href="#home">Home</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/">Multi Page Layouts</a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-mp-layout1.html">Layout1</a>
                            </li>
                            <li>
                              <a href="index-mp-layout2.html">Layout2</a>
                            </li>
                            <li>
                              <a href="index-mp-layout3.html">Layout3</a>
                            </li>
                            <li>
                              <a href="index-mp-layout4.html">Layout4</a>
                            </li>
                            <li>
                              <a href="index-mp-layout5.html">Layout5</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Single Page Layouts</a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-sp-layout1.html">Layout1</a>
                            </li>
                            <li>
                              <a href="index-sp-layout2.html">Layout2</a>
                            </li>
                            <li>
                              <a href="index-sp-layout3.html">Layout3</a>
                            </li>
                            <li>
                              <a href="index-sp-layout4.html">Layout4</a>
                            </li>
                            <li>
                              <a href="index-sp-layout5.html">Layout5</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Boxed Layouts</a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-boxed-mp-layout1.html">
                                Boxed Multi Page Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-mp-layout2.html">
                                Boxed Multi Page Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-mp-layout3.html">
                                Boxed Multi Page Layout3
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-mp-layout4.html">
                                Boxed Multi Page Layout4
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-mp-layout5.html">
                                Boxed Multi Page Layout5
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-sp-layout1.html">
                                Boxed Single Page Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-sp-layout2.html">
                                Boxed Single Page Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-sp-layout3.html">
                                Boxed Single Page Layout3
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-sp-layout4.html">
                                Boxed Single Page Layout4
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-sp-layout5.html">
                                Boxed Single Page Layout5
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">RTL Layouts</a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-rtl-mp-layout1.html">
                                RTL Multi Page Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-mp-layout2.html">
                                RTL Multi Page Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-mp-layout3.html">
                                RTL Multi Page Layout3
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-mp-layout4.html">
                                RTL Multi Page Layout4
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-mp-layout5.html">
                                RTL Multi Page Layout5
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-sp-layout1.html">
                                RTL Single Page Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-sp-layout2.html">
                                RTL Single Page Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-sp-layout3.html">
                                RTL Single Page Layout3
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-sp-layout4.html">
                                RTL Single Page Layout4
                              </a>
                            </li>
                            <li>
                              <a href="index-rtl-sp-layout5.html">
                                RTL Single Page Layout5
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Dark Layouts</a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-dark-mp-layout1.html">
                                Dark Multi Page Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-mp-layout2.html">
                                Dark Multi Page Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-mp-layout3.html">
                                Dark Multi Page Layout3
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-mp-layout4.html">
                                Dark Multi Page Layout4
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-mp-layout5.html">
                                Dark Multi Page Layout5
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-sp-layout1.html">
                                Dark Single Page Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-sp-layout2.html">
                                Dark Single Page Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-sp-layout3.html">
                                Dark Single Page Layout3
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-sp-layout4.html">
                                Dark Single Page Layout4
                              </a>
                            </li>
                            <li>
                              <a href="index-dark-sp-layout5.html">
                                Dark Single Page Layout5
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">
                            Magazine Home Layouts{" "}
                            <span className="label label-warning">New</span>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-hot-magazine-home-layout1.html">
                                Magazine Home layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-hot-magazine-home-layout2.html">
                                Magazine Home layout2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">
                            Portfolio Home Layouts{" "}
                            <span className="label label-warning">New</span>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="index-hot-portfolio-presentation-layout1.html">
                                Portfolio Presentation Layout1
                              </a>
                            </li>
                            <li>
                              <a href="index-hot-portfolio-presentation-layout2.html">
                                Portfolio Presentation Layout2
                              </a>
                            </li>
                            <li>
                              <a href="index-hot-portfolio-presentation-layout3.html">
                                Portfolio Presentation Layout3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="index-hot-shop-home.html">
                            Shop Home{" "}
                            <span className="label label-warning">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            Home Variations{" "}
                            <span className="label label-warning">New</span>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="/">Rev Slider</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="index-home-variation-revslider-style1.html">
                                    Layout1
                                  </a>
                                </li>
                                <li>
                                  <a href="index-home-variation-revslider-style2.html">
                                    Layout2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Maximage Slider</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="index-home-variation-maximageslider-style1.html">
                                    Layout1
                                  </a>
                                </li>
                                <li>
                                  <a href="index-home-variation-maximageslider-style2.html">
                                    Layout2
                                  </a>
                                </li>
                                <li>
                                  <a href="index-home-variation-maximageslider-style3.html">
                                    Layout3
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="index-home-variation-owl-carousel.html">
                                Owl Slider
                              </a>
                            </li>
                            <li>
                              <a href="index-home-variation-typed-text.html">
                                Typed Text Layout
                              </a>
                            </li>
                            <li>
                              <a href="index-home-variation-video-background.html">
                                Youtube Background Video
                              </a>
                            </li>
                            <li>
                              <a href="index-home-variation-html5-video.html">
                                Html5 Background Video
                              </a>
                            </li>
                            <li>
                              <a href="index-home-variation-bg-image-parallax.html">
                                Bg Image Parallax Layout
                              </a>
                            </li>
                            <li>
                              <a href="index-home-variation-bg-static.html">
                                Bg Static Layout
                              </a>
                            </li>
                            <li>
                              <a href="/">Home Appointment Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="index-home-variation-appointment-form-style1.html">
                                    Layout1
                                  </a>
                                </li>
                                <li>
                                  <a href="index-home-variation-appointment-form-style2.html">
                                    Layout2
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Features</a>
                      <ul className="dropdown">
                        <li>
                          <a href="features-preloader.html">Preloaders</a>
                        </li>
                        <li>
                          <a href="/">Header</a>
                          <ul className="dropdown">
                            <li>
                              <a href="features-header-style1.html">
                                Header Style 1
                              </a>
                            </li>
                            <li>
                              <a href="features-header-style2.html">
                                Header Style 2
                              </a>
                            </li>
                            <li>
                              <a href="features-header-style3.html">
                                Header Style 3
                              </a>
                            </li>
                            <li>
                              <a href="features-header-style4.html">
                                Header Style 4
                              </a>
                            </li>
                            <li>
                              <a href="features-header-style5.html">
                                Header Style 5
                              </a>
                            </li>
                            <li>
                              <a href="features-header-style6.html">
                                Header Style 6
                              </a>
                            </li>
                            <li>
                              <a href="features-header-vertical-nav.html">
                                Vertical Header
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Page Title</a>
                          <ul className="dropdown">
                            <li>
                              <a href="features-page-title-bg-dark.html">
                                Bg Dark
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-bg-white.html">
                                Bg White
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-bg-image.html">
                                Bg Image
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-bg-image-parallax.html">
                                Bg Image Parallax
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-bg-pattern.html">
                                Bg Pattern
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-bg-video.html">
                                Bg Video
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-mini-version.html">
                                Mini Version
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-big-version.html">
                                Big Version
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-extra-big-version.html">
                                Extra Big Version
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-text-center.html">
                                Text Center
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-text-left.html">
                                Text Left
                              </a>
                            </li>
                            <li>
                              <a href="features-page-title-text-right.html">
                                Text Right
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Side Push Panel</a>
                          <ul className="dropdown">
                            <li>
                              <a href="features-side-push-panel-left-overlay.html">
                                Left Overlay
                              </a>
                            </li>
                            <li>
                              <a href="features-side-push-panel-left-push.html">
                                Left Push
                              </a>
                            </li>
                            <li>
                              <a href="features-side-push-panel-right-overlay.html">
                                Right Overlay
                              </a>
                            </li>
                            <li>
                              <a href="features-side-push-panel-right-push.html">
                                Right Push
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Sliders</a>
                          <ul className="dropdown">
                            <li>
                              <a href="/">Revolution Slider</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="features-home-revslider.html">
                                    Revolution Slider
                                  </a>
                                </li>
                                <li>
                                  <a href="features-rev-slider-premium-templates.html">
                                    Revolution Slider All In One
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Layer Slider</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="features-home-layerslider.html">
                                    Layer Slider
                                  </a>
                                </li>
                                <li>
                                  <a href="features-layerslider-slider-premium-templates.html">
                                    Layer Slider All In One
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="features-home-bg-image-slider.html">
                                Bg Image Slider
                              </a>
                            </li>
                            <li>
                              <a href="features-home-owl-fullwidth-carousel.html">
                                Owl Fullwidth Carousel
                              </a>
                            </li>
                            <li>
                              <a href="features-home-parallax-bg.html">
                                Static/Parallax Image Bg
                              </a>
                            </li>
                            <li>
                              <a href="features-home-video-bg.html">
                                Video Image Bg
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Form</a>
                          <ul className="dropdown">
                            <li>
                              <a href="/">Contact Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="page-contact1.html">Form style 1</a>
                                </li>
                                <li>
                                  <a href="page-contact2.html">Form style 2</a>
                                </li>
                                <li>
                                  <a href="page-contact3.html">Form style 3</a>
                                </li>
                                <li>
                                  <a href="page-contact4.html">Form style 4</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Login/Register Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="/">Login/Register</a>
                                  <ul className="dropdown">
                                    <li>
                                      <a href="form-login-register-style1.html">
                                        Form style 1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="form-login-register-style2.html">
                                        Form style 2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="/">Login</a>
                                  <ul className="dropdown">
                                    <li>
                                      <a href="form-login-style1.html">
                                        Form style 1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="form-login-style2.html">
                                        Form style 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="form-login-style3.html">
                                        Form style 3
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="/">Register</a>
                                  <ul className="dropdown">
                                    <li>
                                      <a href="form-register-style1.html">
                                        Form style 1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="form-register-style2.html">
                                        Form style 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="form-register-style3.html">
                                        Form style 3
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Subscribe Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-subscribe.html">Form style 1</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Appointment Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-appointment-style1.html">
                                    Form style 1
                                  </a>
                                </li>
                                <li>
                                  <a href="form-appointment-style2.html">
                                    Form style 2
                                  </a>
                                </li>
                                <li>
                                  <a href="form-appointment-style3.html">
                                    Form style 3
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Job Apply Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-job-apply-style1.html">
                                    Form style 1
                                  </a>
                                </li>
                                <li>
                                  <a href="form-job-apply-style2.html">
                                    Form style 2
                                  </a>
                                </li>
                                <li>
                                  <a href="form-job-apply-style3.html">
                                    Form style 3
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Quick Contact Form</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-quick-contact-style1.html">
                                    Form style 1
                                  </a>
                                </li>
                                <li>
                                  <a href="form-quick-contact-style2.html">
                                    Form style 2
                                  </a>
                                </li>
                                <li>
                                  <a href="form-quick-contact-style3.html">
                                    Form style 3
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Paypal Form</a>
                          <ul className="dropdown">
                            <li>
                              <a href="/">Donation Onetime</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-paypal-donate-onetime-style1.html">
                                    Style1
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-onetime-style2.html">
                                    Style2
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-onetime-style3.html">
                                    Style3
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-onetime-style4.html">
                                    Style4
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-onetime-style5.html">
                                    Style5
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-onetime-style6.html">
                                    Style6
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-onetime-style7.html">
                                    Style7
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Donation Recurring</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-paypal-donate-recurring-style1.html">
                                    Style1
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-recurring-style2.html">
                                    {" "}
                                    Style2
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-recurring-style3.html">
                                    Style3
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-recurring-style4.html">
                                    Style4
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-recurring-style5.html">
                                    Style5
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Both Onetime/Recurring</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="form-paypal-donate-both-onetime-recurring-style1.html">
                                    Style1
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-both-onetime-recurring-style2.html">
                                    Style2
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-both-onetime-recurring-style3.html">
                                    Style3
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-both-onetime-recurring-style4.html">
                                    Style4
                                  </a>
                                </li>
                                <li>
                                  <a href="form-paypal-donate-both-onetime-recurring-style5.html">
                                    Style5
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="form-paypal-cart-style1.html">
                                Cart Payment
                              </a>
                            </li>
                            <li>
                              <a href="form-paypal-order-style1.html">
                                Order Payment Style1
                              </a>
                            </li>
                            <li>
                              <a href="form-paypal-order-style2.html">
                                Order Payment Style2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Popup Promo Box</a>
                          <ul className="dropdown">
                            <li>
                              <a href="features-popup-promo-box.html">
                                Default
                              </a>
                            </li>
                            <li>
                              <a href="features-popup-promo-box-cookie-enabled.html">
                                Cookie Enabled
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Footer</a>
                          <ul className="dropdown">
                            <li>
                              <a href="features-footer-dark-style1.html#footer">
                                Footer Dark One
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-dark-style2.html#footer">
                                Footer Dark Two
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-dark-style3.html#footer">
                                Footer Dark Three
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-dark-style4.html#footer">
                                Footer Dark Four
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-dark-style5.html#footer">
                                Footer Dark Five
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-dark-style6.html#footer">
                                Footer Dark Six
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-white-style1.html#footer">
                                Footer White One
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-white-style2.html#footer">
                                Footer White Two
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-white-style3.html#footer">
                                Footer White Three
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-white-style4.html#footer">
                                Footer White Four
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-white-style5.html#footer">
                                Footer White Five
                              </a>
                            </li>
                            <li>
                              <a href="features-footer-white-style6.html#footer">
                                Footer White Six
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/">About</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-about1.html">About Style 1</a>
                            </li>
                            <li>
                              <a href="page-about2.html">About Style 2</a>
                            </li>
                            <li>
                              <a href="page-about3.html">About Style 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Get Involved</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-fundraise.html">Fundraise</a>
                            </li>
                            <li>
                              <a href="page-donate.html">Donate</a>
                            </li>
                            <li>
                              <a href="page-run-a-race.html">Run a Race</a>
                            </li>
                            <li>
                              <a href="page-campaign.html">Campaign</a>
                            </li>
                            <li>
                              <a href="page-philanthropy.html">Philanthropy</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Projects</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-running-projects.html">
                                Running Projects List
                              </a>
                            </li>
                            <li>
                              <a href="page-running-projects-details.html">
                                Running Projects Details
                              </a>
                            </li>
                            <li>
                              <a href="page-completed-projects.html">
                                Completed Projects List
                              </a>
                            </li>
                            <li>
                              <a href="page-completed-projects-details.html">
                                Completed Projects Details
                              </a>
                            </li>
                            <li>
                              <a href="page-next-projects.html">
                                Next Projects List
                              </a>
                            </li>
                            <li>
                              <a href="page-next-projects-details.html">
                                Next Projects Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Team</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-team-style1.html">Team Style 1</a>
                            </li>
                            <li>
                              <a href="page-team-style2.html">Team Style 2</a>
                            </li>
                            <li>
                              <a href="page-team-member-details.html">
                                Team Member Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Contact</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-contact1.html">Contact style 1</a>
                            </li>
                            <li>
                              <a href="page-contact2.html">Contact style 2</a>
                            </li>
                            <li>
                              <a href="page-contact3.html">Contact style 3</a>
                            </li>
                            <li>
                              <a href="page-contact4.html">Contact style 4</a>
                            </li>
                            <li>
                              <a href="page-contact5-with-multiple-marker.html">
                                Contact 5 - Multiple Marker
                              </a>
                            </li>
                            <li>
                              <a href="page-contact6-with-multiple-marker.html">
                                Contact 6 - Multiple Marker
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="page-timetable.html">Timetable</a>
                        </li>
                        <li>
                          <a href="/">Calender</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-calendar1.html">Calendar Style1</a>
                            </li>
                            <li>
                              <a href="page-calendar2.html">Calendar Style2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Events</a>
                          <ul className="dropdown">
                            <li>
                              <a href="/">Events Grid</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="events-grid-2column.html">
                                    Grid 2column
                                  </a>
                                </li>
                                <li>
                                  <a href="events-grid-3column.html">
                                    Grid 3column
                                  </a>
                                </li>
                                <li>
                                  <a href="events-grid-4column.html">
                                    Grid 4column
                                  </a>
                                </li>
                                <li>
                                  <a href="events-grid-left-sidebar.html">
                                    Grid Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="events-grid-right-sidebar.html">
                                    Grid Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Events List</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="events-list-left-sidebar.html">
                                    List Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="events-list-right-sidebar.html">
                                    List Right Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="events-list-no-sidebar.html">
                                    List No Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">Events Details</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="events-details-style1.html">
                                    Details Style1
                                  </a>
                                </li>
                                <li>
                                  <a href="events-details-style2.html">
                                    Details Style2
                                  </a>
                                </li>
                                <li>
                                  <a href="events-details-style3.html">
                                    Details Style3
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="events-table.html">Events Table</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">
                            Job <span className="label label-success">New</span>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="job-list.html">Job List</a>
                            </li>
                            <li>
                              <a href="job-details-style1.html">
                                Job Details Style1
                              </a>
                            </li>
                            <li>
                              <a href="job-details-style2.html">
                                Job Details Style2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">FAQ</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-faq-style1.html">FAQ Style1</a>
                            </li>
                            <li>
                              <a href="page-faq-style2.html">FAQ Style2</a>
                            </li>
                            <li>
                              <a href="page-faq-style3.html">FAQ Style3</a>
                            </li>
                            <li>
                              <a href="page-faq-style4.html">FAQ Style4</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Page 404</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-404-style1.html">style1</a>
                            </li>
                            <li>
                              <a href="page-404-style2.html">style2</a>
                            </li>
                            <li>
                              <a href="page-404-style3.html">style3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Shop</a>
                          <ul className="dropdown">
                            <li>
                              <a href="shop-category.html">Category</a>
                            </li>
                            <li>
                              <a href="shop-category-sidebar.html">
                                Category Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-details.html">
                                Product Details
                              </a>
                            </li>
                            <li>
                              <a href="shop-cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="shop-checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Coming Soon</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-coming-soon-style1.html">style1</a>
                            </li>
                            <li>
                              <a href="page-coming-soon-style2.html">style2</a>
                            </li>
                            <li>
                              <a href="page-coming-soon-style3.html">style3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Under Construction</a>
                          <ul className="dropdown">
                            <li>
                              <a href="page-under-construction-style1.html">
                                style1
                              </a>
                            </li>
                            <li>
                              <a href="page-under-construction-style2.html">
                                style2
                              </a>
                            </li>
                            <li>
                              <a href="page-under-construction-style3.html">
                                style3
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Gallery</a>
                      <ul className="dropdown">
                        <li>
                          <a href="page-gallery-3col.html">3 Columns</a>
                        </li>
                        <li>
                          <a href="page-gallery-3col-only-image.html">
                            3 Columns Only Image
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-4col.html">4 Columns</a>
                        </li>
                        <li>
                          <a href="page-gallery-4col-only-image.html">
                            4 Columns Only Image
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-grid.html">
                            Grids (2-10 Columns)
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-grid-animation.html">
                            Grids with Animation (2-10 Columns)
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-3col-tiles.html">
                            3 Columns Tiles
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-4col-tiles.html">
                            4 Columns Tiles
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-masonry-tiles.html">
                            Tiles (2-10 Columns)
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-masonry-tiles-animation.html">
                            Tiles with Animation (2-10 Columns)
                          </a>
                        </li>
                        <li>
                          <a href="page-gallery-prettyphoto.html">
                            Pretty Photo Gallery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/">Blog Classic</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-classic-no-sidebar.html">
                                Blog Classic No Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-classic-left-sidebar.html">
                                Blog Classic Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-classic-right-sidebar.html">
                                Blog Classic Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-classic-both-sidebar.html">
                                Blog Classic Both Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-classic-left-thumbs.html">
                                Blog Classic Left Thumbs
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Blog Grid</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-grid-2-column.html">
                                Blog Grid 2 Column
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-3-column.html">
                                Blog Grid 3 Column
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-4-column.html">
                                Blog Grid 4 Column
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Blog Masonry</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-masonry-2-column.html">
                                Blog Masonry 2 Column
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3-column.html">
                                Blog Masonry 3 Column
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4-column.html">
                                Blog Masonry 4 Column
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Blog Single</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-single-no-sidebar.html">
                                Blog Single No Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-single-left-sidebar.html">
                                Blog Single Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-single-right-sidebar.html">
                                Blog Single Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-single-both-sidebar.html">
                                Blog Single Both Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-single-disqus-comments.html">
                                Blog Single Discuss Comments
                              </a>
                            </li>
                            <li>
                              <a href="blog-single-facebook-comments.html">
                                Blog Single Facebook Comments
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Blog Infinity Scroll</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-extra-infinity-scroll.html">
                                Blog Infinity Scroll Default
                              </a>
                            </li>
                            <li>
                              <a href="blog-extra-infinity-scroll-lazyload.html">
                                Blog Infinity Scroll Lazyload
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/">Blog Timeline</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-timeline.html">
                                Blog Timeline Default
                              </a>
                            </li>
                            <li>
                              <a href="blog-timeline-masonry.html">
                                Blog Timeline Masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Shortcodes</a>
                      <div className="megamenu">
                        <div className="megamenu-row">
                          <div className="col3">
                            <ul className="list-unstyled list-dashed">
                              <li>
                                <a href="shortcode-accordion.html">
                                  <i className="fa fa-list-ul"></i> Accordion
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-alerts.html">
                                  <i className="fa fa-exclamation-circle"></i>{" "}
                                  Alerts
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-animations.html">
                                  <i className="fa fa-magic"></i> Animations
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-background-html5-video.html">
                                  <i className="fa fa-video-camera"></i> HTML5
                                  Background Video
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-blockquotes.html">
                                  <i className="fa fa-quote-right"></i>{" "}
                                  Blockquotes
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-button-groups-and-dropdowns.html">
                                  <i className="fa fa-link"></i> Button Groups
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-button-hover-effect.html">
                                  <i className="fa fa-flag-o"></i> Button Hover
                                  Effect
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-buttons.html">
                                  <i className="fa fa-external-link"></i>{" "}
                                  Buttons
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-call-to-actions.html">
                                  <i className="fa fa-plus-square"></i> Call To
                                  Actions
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-charts.html">
                                  <i className="fa fa-pie-chart"></i> Charts
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-columns-grids.html">
                                  <i className="fa fa-columns"></i> Columns
                                  Grids
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-divider.html">
                                  <i className="fa fa-indent"></i> Divider
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-dropcaps.html">
                                  <i className="fa fa-bold"></i> Dropcaps
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-datetime-datepicker.html">
                                  <i className="fa fa-calendar"></i> Date Picker
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-datetime-timepicker.html">
                                  <i className="fa fa-calendar"></i> Time Picker
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-datetime-datetimepicker.html">
                                  <i className="fa fa-calendar"></i> Bootstrap
                                  Date-Time Picker
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col3">
                            <ul className="list-unstyled list-dashed">
                              <li>
                                <a href="shortcode-datetime-datepair.html">
                                  <i className="fa fa-calendar"></i> Date Pair
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-flex-sliders.html">
                                  <i className="fa fa-sliders"></i> Flex Sliders
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-flipbox.html">
                                  <i className="fa fa-square"></i> Flipbox
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-forms.html">
                                  <i className="fa fa-align-justify"></i> Forms
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-funfacts.html">
                                  <i className="fa fa-eye-slash"></i> Funfacts
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-iconbox.html">
                                  <i className="fa fa-unsorted"></i> Icon Box
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-icon-7stroke.html">
                                  <i className="fa fa-circle-o"></i> Icons
                                  7stroke
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-icon-elegant-icons.html">
                                  <i className="fa fa-eye-slash"></i> Icons
                                  Elegant
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-icon-flat-color-icons.html">
                                  <i className="fa fa-i-cursor"></i> Icons Flat
                                  Color
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-icon-fontawesome.html">
                                  <i className="fa fa-fort-awesome"></i> Icons
                                  FontAwesome
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-icon-fontawesome-tutorial.html">
                                  <i className="fa fa-fonticons"></i> Icons
                                  FontAwesome Tutorial
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-icon-strokegap.html">
                                  <i className="fa fa-anchor"></i> Icons Stroke
                                  Gap
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-image-box.html">
                                  <i className="fa fa-file-image-o"></i> Image
                                  Box
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-instagram.html">
                                  <i className="fa fa-instagram"></i> Instagram
                                  Feed
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-labels-badges.html">
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Labels Badges
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-listgroup-panels.html">
                                  <i className="fa fa-th-list"></i> Listgroup
                                  Panels
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col3">
                            <ul className="list-unstyled list-dashed">
                              <li>
                                <a href="shortcode-lists.html">
                                  <i className="fa fa-list"></i> Lists
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-maps.html">
                                  <i className="fa fa-map-o"></i> Maps
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-media-embed.html">
                                  <i className="fa fa-play-circle-o"></i> Media
                                  Embed
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-modal-bootstrap.html">
                                  <i className="fa fa-search-plus"></i> Modal
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-modal-lightbox.html">
                                  <i className="fa fa-expand"></i> Lightbox
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-navigation.html">
                                  <i className="fa fa-navicon"></i> Navigation
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-owl-carousel.html">
                                  <i className="fa fa-sliders"></i> Owl Carousel
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-pagination.html">
                                  <i className="fa fa-arrow-circle-o-right"></i>{" "}
                                  Pagination
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-pricing-tables.html">
                                  <i className="fa fa-dollar"></i> Pricing
                                  Tables
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-progressbar.html">
                                  <i className="fa fa-tasks"></i> Progress Bars
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-responsive.html">
                                  <i className="fa fa-tablet"></i> Responsive
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-separator.html">
                                  <i className="fa fa-minus-square-o"></i>{" "}
                                  Separator
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-sitemap.html">
                                  <i className="fa fa-sitemap"></i> Sitemap
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-sliders.html">
                                  <i className="fa fa-sliders"></i> Sliders
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-smoothscrolling.html">
                                  <i className="fa fa-binoculars"></i>{" "}
                                  Smoothscrolling
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-styled-icons.html">
                                  <i className="fa fa-facebook-square"></i>{" "}
                                  Styled Icons
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col3">
                            <ul className="list-unstyled list-dashed">
                              <li>
                                <a href="shortcode-subscribe.html">
                                  <i className="fa fa-user-plus"></i> Subscribe
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-tables.html">
                                  <i className="fa fa-table"></i> Tables
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-tabs.html">
                                  <i className="fa fa-indent"></i> Tabs
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-team.html">
                                  <i className="fa fa-users"></i> Team
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-testimonials.html">
                                  <i className="fa fa-user-secret"></i>{" "}
                                  Testimonials
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-textblock.html">
                                  <i className="fa fa-bold"></i> Textblock
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-thumbnails-carousels.html">
                                  <i className="fa fa-sliders"></i>{" "}
                                  Thumbnails/carousels
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-title.html">
                                  <i className="fa fa-text-height"></i> Title
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-timer-final-countdown.html">
                                  <i className="fa fa-text-height"></i> Timer
                                  Final Countdown
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-timer-flipclock.html">
                                  <i className="fa fa-text-height"></i> Timer
                                  Flipclock
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-timer-slick-circular.html">
                                  <i className="fa fa-text-height"></i> Timer
                                  Slick Circular
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-twitter.html">
                                  <i className="fa fa-twitter-square"></i>{" "}
                                  Twitter Feed
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-typography.html">
                                  <i className="fa fa-font"></i> Typography
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-vertical-timeline.html">
                                  <i className="fa fa-arrows-v"></i> Vertical
                                  Timeline
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-widgets.html">
                                  <i className="fa fa-gift"></i> Widgets
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-working-process.html">
                                  <i className="fa fa-exchange"></i> Working
                                  Process
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
