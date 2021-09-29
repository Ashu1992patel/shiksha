import React from "react";

export default function MainFooter() {
  return (
    <>
      <footer id="footer" className="bg-black-222">
        <div className="container pt-80 pb-30">
          <div className="row border-bottom-black">
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <img
                  className="mb-20"
                  alt=""
                  src="images/logo-wide-white.png"
                />
                <p>
                  Lorem ipsum dolor sit amet, consecte tur adipisi cing elit
                  lestias eius illum libero dolor nobis deleniti.
                </p>
                <p>
                  203, Envato Labs, Behind Alis Steet, Melbourne, Australia.
                </p>
                <ul className="list-inline mt-5">
                  <li className="m-0 pl-10 pr-10">
                    <i className="fa fa-phone text-theme-colored mr-5"></i>
                    <a className="text-gray" href="/">
                      123-456-789
                    </a>
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    
                    <i className="fa fa-envelope-o text-theme-colored mr-5"></i>
                    <a className="text-gray" href="/">
                      contact@yourdomain.com
                    </a>
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    
                    <i className="fa fa-globe text-theme-colored mr-5"></i>
                    <a className="text-gray" href="/">
                      www.yourdomain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Useful Links</h5>
                <ul className="list angle-double-right list-border">
                  <li>
                    <a href="/">Body Building</a>
                  </li>
                  <li>
                    <a href="/">Fitness Classes</a>
                  </li>
                  <li>
                    <a href="/">Weight lifting</a>
                  </li>
                  <li>
                    <a href="/">Yoga Courses</a>
                  </li>
                  <li>
                    <a href="/">Training</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Twitter Feed</h5>
                <div
                  className="twitter-feed list-border clearfix"
                  data-username="Envato"
                  data-count="2"
                ></div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget dark">
                <h5 className="widget-title line-bottom">Latest News</h5>
                <div className="latest-posts">
                  <article className="post media-post clearfix pb-0 mb-10">
                    <a href="/" className="post-thumb">
                      <img alt="" src="http://placehold.it/80x55" />
                    </a>
                    <div className="post-right">
                      <h5 className="post-title mt-0 mb-5">
                        <a href="/">Sustainable Construction</a>
                      </h5>
                      <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                    </div>
                  </article>
                  <article className="post media-post clearfix pb-0 mb-10">
                    <a href="/" className="post-thumb">
                      <img alt="" src="http://placehold.it/80x55" />
                    </a>
                    <div className="post-right">
                      <h5 className="post-title mt-0 mb-5">
                        <a href="/">Industrial Coatings</a>
                      </h5>
                      <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                    </div>
                  </article>
                  <article className="post media-post clearfix pb-0 mb-10">
                    <a href="/" className="post-thumb">
                      <img alt="" src="http://placehold.it/80x55" />
                    </a>
                    <div className="post-right">
                      <h5 className="post-title mt-0 mb-5">
                        <a href="/">Storefront Installations</a>
                      </h5>
                      <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-md-5">
              <div className="widget dark">
                <h5 className="widget-title mb-10">Subscribe Us</h5>
                {/*
                        <!-- Mailchimp Subscription Form Starts Here -->*/}
                <form
                  id="mailchimp-subscription-form-footer"
                  className="newsletter-form"
                >
                  <div className="input-group">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      placeholder="Your Email"
                      className="form-control input-lg font-16"
                      data-height="45px"
                      id="mce-EMAIL-footer"
                    />
                    <span className="input-group-btn">
                      <button
                        data-height="45px"
                        className="btn btn-colored btn-theme-colored btn-xs m-0 font-14"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="widget dark">
                <h5 className="widget-title mb-10">Call Us Now</h5>
                <div className="text-gray">
                  +61 3 1234 5678
                  <br /> +12 3 1234 5678
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget dark">
                <h5 className="widget-title mb-10">Connect With Us</h5>
                <ul className="styled-icons icon-dark icon-circled icon-sm">
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
                      <i className="fa fa-skype"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-black-333">
          <div className="container pt-20 pb-20">
            <div className="row">
              <div className="col-md-6">
                <p className="font-11 text-black-777 m-0">
                  Copyright &copy;2015 ThemeMascot. All Rights Reserved
                </p>
              </div>
              <div className="col-md-6 text-right">
                <div className="widget no-border m-0">
                  <ul className="list-inline sm-text-center mt-5 font-12">
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="/">Help Desk</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="/">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
