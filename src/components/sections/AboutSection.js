import React from "react";

export default function AboutSection() {
  return (
    <>
      <section>
        <div className="container pt-0">
          <div className="section-content">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="icon-box bg-lighter text-center p-30 mt-sm-0 border-1px"
                  data-margin-top="-90px"
                >
                  <a
                    className="icon icon-lg bg-theme-colored icon-circled icon-border-effect effect-circled text-white"
                    href="/"
                  >
                    <i className="flaticon-charity-make-a-donation"></i>
                  </a>
                  <h4 className="icon-box-title text-uppercase letter-space-3">
                    <a className="text-theme-colored" href="/">
                      Give Donation
                    </a>
                  </h4>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias non nulla placeat, odio, qui dicta alias.
                  </p>
                  <a
                    href="/"
                    className="btn btn-theme-colored  text-uppercase mt-10"
                  >
                    More info
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="icon-box bg-lighter text-center p-30 mt-sm-0 border-1px"
                  data-margin-top="-90px"
                >
                  <a
                    className="icon icon-lg bg-theme-colored icon-circled icon-border-effect effect-circled text-white"
                    href="/"
                  >
                    <i className="flaticon-charity-hand-holding-a-gift"></i>
                  </a>
                  <h4 className="icon-box-title text-uppercase letter-space-3">
                    <a className="text-theme-colored" href="/">
                      Give Scholarship
                    </a>
                  </h4>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias non nulla placeat, odio, qui dicta alias.
                  </p>
                  <a
                    href="/"
                    className="btn btn-theme-colored  text-uppercase mt-10"
                  >
                    More info
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="icon-box bg-lighter text-center p-30 mt-sm-0 border-1px"
                  data-margin-top="-90px"
                >
                  <a
                    className="icon icon-lg bg-theme-colored icon-circled icon-border-effect effect-circled text-white"
                    href="/"
                  >
                    <i className="flaticon-charity-dove-of-peace"></i>
                  </a>
                  <h4 className="icon-box-title text-uppercase letter-space-3">
                    <a className="text-theme-colored" href="/">
                      Adopt a Child
                    </a>
                  </h4>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias non nulla placeat, odio, qui dicta alias.
                  </p>
                  <a
                    href="/"
                    className="btn btn-theme-colored  text-uppercase mt-10"
                  >
                    More info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
