import React from "react";

export default function HowCanHelpSection() {
  return (
    <>
      <section id="services">
        <div className="container pb-60">
          <div className="section-title text-center">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="title text-black-666">
                  How <span className="text-theme-colored"> Can Help?</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mtli-row-clearfix">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-block">
                <div className="thumb">
                  <img
                    src="images/services/1.jpg"
                    className="img-fullwidth"
                    alt=""
                  />
                  <div className="desc">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil, repudiandae...
                    </p>
                  </div>
                </div>
                <div className="content">
                  <h4 className="mt-0 text-black">Give Donation</h4>
                  <div className="mt-10">
                    {" "}
                    <a href="/" className="btn btn-theme-colored btn-sm">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-block">
                <div className="thumb">
                  <img
                    src="images/services/2.jpg"
                    className="img-fullwidth"
                    alt=""
                  />
                  <div className="desc">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil, repudiandae...
                    </p>
                  </div>
                </div>
                <div className="content">
                  <h4 className="mt-0 text-black">Become a Volenteer</h4>
                  <div className="mt-10">
                    {" "}
                    <a href="/" className="btn btn-theme-colored btn-sm">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-block">
                <div className="thumb">
                  <img
                    src="images/services/3.jpg"
                    className="img-fullwidth"
                    alt=""
                  />
                  <div className="desc">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil, repudiandae...
                    </p>
                  </div>
                </div>
                <div className="content">
                  <h4 className="mt-0 text-black">Give a Scholarship</h4>
                  <div className="mt-10">
                    {" "}
                    <a href="/" className="btn btn-theme-colored btn-sm">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-block">
                <div className="thumb">
                  <img
                    src="images/services/4.jpg"
                    className="img-fullwidth"
                    alt=""
                  />
                  <div className="desc">
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil, repudiandae...
                    </p>
                  </div>
                </div>
                <div className="content">
                  <h4 className="mt-0 text-black">Adopt a Child</h4>
                  <div className="mt-10">
                    {" "}
                    <a href="/" className="btn btn-theme-colored btn-sm">
                      Read More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
