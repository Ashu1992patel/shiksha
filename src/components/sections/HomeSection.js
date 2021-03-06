import React from "react";

export default function HomeSection() {
  return (
    <>
      <section id="home">
        <div className="container-fluid p-0">
          {/*
                <!-- Slider Revolution Start -->*/}
          <div className="rev_slider_wrapper">
            <div className="rev_slider" data-version="5.0">
              <ul>
                {/*
                            <!-- SLIDE 1 -->*/}
                <li
                  data-index="rs-1"
                  data-transition="slidingoverlayhorizontal"
                  data-slotamount="default"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="images/bg/bg4.jpg"
                  data-rotate="0"
                  data-saveperformance="off"
                  data-title="Slide 1"
                  data-description=""
                >
                  {/*
                                <!-- MAIN IMAGE -->*/}
                  <img
                    src="images/bg/bg4.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    className="rev-slidebg"
                    data-bgparallax="10"
                    data-no-retina
                  />

                  <div
                    className="tp-caption tp-resizeme text-uppercase  bg-dark-transparent text-white font-raleway pl-30 pr-30"
                    id="rs-1-layer-1"
                    data-x="['center']"
                    data-hoffset="['0']"
                    data-y="['middle']"
                    data-voffset="['-90']"
                    data-fontsize="['28']"
                    data-lineheight="['54']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 7; white-space: nowrap; font-weight:400; border-radius: 30px;"
                  >
                    For the poor children
                  </div>

                  {/*
                                <!-- LAYER NR. 2 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-uppercase bg-theme-colored-transparent text-white font-raleway pl-30 pr-30"
                    id="rs-1-layer-2"
                    data-x="['center']"
                    data-hoffset="['0']"
                    data-y="['middle']"
                    data-voffset="['-20']"
                    data-fontsize="['48']"
                    data-lineheight="['70']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 7; white-space: nowrap; font-weight:700; border-radius: 30px;"
                  >
                    raise your helping hand
                  </div>

                  {/*
                                <!-- LAYER NR. 3 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-white text-center"
                    id="rs-1-layer-3"
                    data-x="['center']"
                    data-hoffset="['0']"
                    data-y="['middle']"
                    data-voffset="['50']"
                    data-fontsize="['16']"
                    data-lineheight="['28']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1400"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 5; white-space: nowrap; letter-spacing:0px; font-weight:400;"
                  >
                    Every day we bring hope to millions of children in the
                    world's
                    <br /> hardest places as a sign of God's unconditional love.
                  </div>

                  {/*
                                <!-- LAYER NR. 4 -->*/}
                  <div
                    className="tp-caption tp-resizeme"
                    id="rs-1-layer-4"
                    data-x="['center']"
                    data-hoffset="['0']"
                    data-y="['middle']"
                    data-voffset="['115']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1400"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 5; white-space: nowrap; letter-spacing:1px;"
                  >
                    <a
                      className="btn btn-default btn-circled btn-transparent pl-20 pr-20"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </li>

                {/*
                            <!-- SLIDE 2 -->*/}
                <li
                  data-index="rs-2"
                  data-transition="slidingoverlayhorizontal"
                  data-slotamount="default"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="images/bg/bg5.jpg"
                  data-rotate="0"
                  data-saveperformance="off"
                  data-title="Slide 2"
                  data-description=""
                >
                  {/*
                                <!-- MAIN IMAGE -->*/}
                  <img
                    src="images/bg/bg5.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    className="rev-slidebg"
                    data-bgparallax="10"
                    data-no-retina
                  />
                  {/*
                                <!-- LAYERS -->*/}{" "}
                  {/*
                                <!-- LAYER NR. 1 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-uppercase text-white font-raleway"
                    id="rs-2-layer-1"
                    data-x="['left']"
                    data-hoffset="['30']"
                    data-y="['middle']"
                    data-voffset="['-110']"
                    data-fontsize="['110']"
                    data-lineheight="['120']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 7; white-space: nowrap; font-weight:700;"
                  >
                    Donate
                  </div>
                  {/*
                                <!-- LAYER NR. 2 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-uppercase text-white font-raleway bg-theme-colored-transparent pl-20 pr-20"
                    id="rs-2-layer-2"
                    data-x="['left']"
                    data-hoffset="['35']"
                    data-y="['middle']"
                    data-voffset="['-25']"
                    data-fontsize="['35']"
                    data-lineheight="['54']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 7; white-space: nowrap; font-weight:600; border-radius: 30px;"
                  >
                    For the poor children
                  </div>
                  {/*
                                <!-- LAYER NR. 3 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-white"
                    id="rs-2-layer-3"
                    data-x="['left']"
                    data-hoffset="['35']"
                    data-y="['middle']"
                    data-voffset="['30']"
                    data-fontsize="['16']"
                    data-lineheight="['28']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1400"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 5; white-space: nowrap; letter-spacing:0px; font-weight:400;"
                  >
                    Every day we bring hope to millions of children in the
                    world's
                    <br /> hardest places as a sign of God's unconditional love.
                  </div>
                  {/*
                                <!-- LAYER NR. 4 -->*/}
                  <div
                    className="tp-caption tp-resizeme"
                    id="rs-2-layer-4"
                    data-x="['left']"
                    data-hoffset="['35']"
                    data-y="['middle']"
                    data-voffset="['95']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1400"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 5; white-space: nowrap; letter-spacing:1px;"
                  >
                    <a
                      className="btn btn-colored btn-lg btn-theme-colored pl-20 pr-20"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </li>

                {/*
                            <!-- SLIDE 3 -->*/}
                <li
                  data-index="rs-3"
                  data-transition="slidingoverlayhorizontal"
                  data-slotamount="default"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="images/bg/bg7.jpg"
                  data-rotate="0"
                  data-saveperformance="off"
                  data-title="Slide 3"
                  data-description=""
                >
                  {/*
                                <!-- MAIN IMAGE -->*/}
                  <img
                    src="images/bg/bg7.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    className="rev-slidebg"
                    data-bgparallax="10"
                    data-no-retina
                  />
                  {/*
                                <!-- LAYERS -->*/}{" "}
                  {/*
                                <!-- LAYER NR. 1 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-uppercase text-white font-raleway bg-theme-colored-transparent pr-20 pl-20"
                    id="rs-3-layer-1"
                    data-x="['right']"
                    data-hoffset="['30']"
                    data-y="['middle']"
                    data-voffset="['-90']"
                    data-fontsize="['64']"
                    data-lineheight="['72']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 7; white-space: nowrap; font-weight:600;"
                  >
                    <span className="">Help</span> The Poor
                  </div>
                  {/*
                                <!-- LAYER NR. 2 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-uppercase text-white font-raleway"
                    id="rs-3-layer-2"
                    data-x="['right']"
                    data-hoffset="['35']"
                    data-y="['middle']"
                    data-voffset="['-25']"
                    data-fontsize="['32']"
                    data-lineheight="['54']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 7; white-space: nowrap; font-weight:600;"
                  >
                    For Their Better Future
                  </div>
                  {/*
                                <!-- LAYER NR. 3 -->*/}
                  <div
                    className="tp-caption tp-resizeme text-white text-right"
                    id="rs-3-layer-3"
                    data-x="['right']"
                    data-hoffset="['35']"
                    data-y="['middle']"
                    data-voffset="['30']"
                    data-fontsize="['16']"
                    data-lineheight="['28']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;s:500"
                    data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                    data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                    data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1400"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 5; white-space: nowrap; letter-spacing:0px; font-weight:400;"
                  >
                    Every day we bring hope to millions of children in the
                    world's
                    <br /> hardest places as a sign of God's unconditional love.
                  </div>
                  {/*
                                <!-- LAYER NR. 4 -->*/}
                  <div
                    className="tp-caption tp-resizeme"
                    id="rs-3-layer-4"
                    data-x="['right']"
                    data-hoffset="['35']"
                    data-y="['middle']"
                    data-voffset="['95']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1400"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"
                    style="z-index: 5; white-space: nowrap; letter-spacing:1px;"
                  >
                    <a
                      className="btn btn-colored btn-lg btn-flat btn-theme-colored pl-20 pr-20"
                      href="#"
                    >
                      Donate Now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/*
                    <!-- end .rev_slider -->*/}
          </div>
        </div>
      </section>
    </>
  );
}
