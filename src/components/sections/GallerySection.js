import React from "react";

export default function GallerySection() {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-title text-center">
            <div className="row">
              <div className="col-md-12">
                <h2 className="line-height-1 mt-0 mb-0 pb-20">
                  Photo<span className="text-theme-colored"> Gallery</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/*
                        <!-- Works Filter -->*/}
              <div className="portfolio-filter font-alt align-center">
                <a href="/" className="active" data-filter="*">
                  All
                </a>
                <a href="#branding" className="" data-filter=".branding">
                  Branding
                </a>
                <a href="#design" className="" data-filter=".design">
                  Design
                </a>
                <a href="#photography" className="" data-filter=".photography">
                  Photography
                </a>
              </div>
              {/*
                        <!-- End Works Filter -->*/}{" "}
              {/*
                        <!-- Portfolio Gallery Grid -->*/}
              <div id="grid" className="gallery-isotope grid-4 gutter clearfix">
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/1.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            data-lightbox="image"
                            href="images/portfolio/1.jpg"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                          <a href="/">
                            <i className="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/1.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item branding">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/2.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="/">
                            <i className="fa fa-link"></i>
                          </a>
                          <a href="/">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/2.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item design">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/3.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="/">
                            <i className="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/3.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/4.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            className="popup-youtube"
                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          >
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/4.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item branding">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/5.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            className="popup-vimeo"
                            href="https://vimeo.com/45830194"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/5.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item design">
                  <div className="thumb">
                    <div className="flexslider-wrapper">
                      <div className="flexslider">
                        <ul className="slides">
                          <li>
                            <a
                              href="images/portfolio/1.jpg"
                              title="Portfolio Gallery - Photo 1"
                            >
                              <img src="images/portfolio/1.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="images/portfolio/2.jpg"
                              title="Portfolio Gallery - Photo 2"
                            >
                              <img src="images/portfolio/2.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="images/portfolio/3.jpg"
                              title="Portfolio Gallery - Photo 3"
                            >
                              <img src="images/portfolio/3.jpg" alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="/">
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Portfolio Item End -->*/}{" "}
                {/* <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/1.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            data-lightbox="image"
                            href="images/portfolio/1.jpg"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                          <a href="/">
                            <i className="fa fa-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/2.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item design">
                  <div className="thumb">
                    <div
                      className="flexslider-wrapper"
                      data-direction="vertical"
                    >
                      <div className="flexslider">
                        <ul className="slides">
                          <li>
                            <a
                              href="images/portfolio/6.jpg"
                              title="Portfolio Gallery - Photo 1"
                            >
                              <img src="images/portfolio/6.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="images/portfolio/5.jpg"
                              title="Portfolio Gallery - Photo 2"
                            >
                              <img src="images/portfolio/5.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="images/portfolio/4.jpg"
                              title="Portfolio Gallery - Photo 3"
                            >
                              <img src="images/portfolio/4.jpg" alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a href="/">
                            <i className="fa fa-picture-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography design">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/3.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            data-lightbox="image"
                            href="images/portfolio/2.jpg"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/3.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography branding">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/6.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            data-lightbox="image"
                            href="images/portfolio/6.jpg"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/6.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/4.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            data-lightbox="image"
                            href="images/portfolio/4.jpg"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/4.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}{" "}
                {/*
                            <!-- Portfolio Item Start -->*/}
                <div className="gallery-item photography">
                  <div className="thumb">
                    <img
                      className="img-fullwidth"
                      src="images/portfolio/3.jpg"
                      alt="project"
                    />
                    <div className="overlay-shade"></div>
                    <div className="icons-holder">
                      <div className="icons-holder-inner">
                        <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                          <a
                            data-lightbox="image"
                            href="images/portfolio/3.jpg"
                          >
                            <i className="fa fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="hover-link"
                      data-lightbox="image"
                      href="images/portfolio/3.jpg"
                    >
                      View more
                    </a>
                  </div>
                </div>
                {/*
                            <!-- Portfolio Item End -->*/}
              </div>
              {/*
                        <!-- End Portfolio Gallery Grid -->*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
