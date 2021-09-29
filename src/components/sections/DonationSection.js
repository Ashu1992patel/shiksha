import React from "react";

export default function DonationSection() {
  return (
    <>
      <section id="donation" className="bg-lighter">
        <div className="container mt-0 pt-50">
          <div className="section-content">
            <div className="row">
              <div
                className="col-md-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h3 className="title text-black-666 line-bottom">
                  Make a Donation{" "}
                  <span className="text-theme-colored"> Now!</span>
                </h3>{" "}
                {/*
                            <!-- ===== START: Paypal Both Onetime/Recurring Form ===== -->*/}
                <form id="paypal_donate_form_onetime_recurring">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-20">
                        <label>
                          <strong>Payment Type</strong>
                        </label>
                        <br />
                        <label className="radio-inline">
                          <input
                            type="radio"
                            checked=""
                            value="one_time"
                            name="payment_type"
                          />{" "}
                          One Time
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            value="recurring"
                            name="payment_type"
                          />{" "}
                          Recurring
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-12" id="donation_type_choice">
                      <div className="form-group mb-20">
                        <label>
                          <strong>Donation Type</strong>
                        </label>
                        <div className="radio mt-5">
                          <label className="radio-inline">
                            <input
                              type="radio"
                              value="D"
                              name="t3"
                              checked=""
                            />{" "}
                            Daily
                          </label>
                          <label className="radio-inline">
                            <input type="radio" value="W" name="t3" /> Weekly
                          </label>
                          <label className="radio-inline">
                            <input type="radio" value="M" name="t3" /> Monthly
                          </label>
                          <label className="radio-inline">
                            <input type="radio" value="Y" name="t3" /> Yearly
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group mb-20">
                        <label>
                          <strong>I Want to Donate for</strong>
                        </label>
                        <select name="item_name" className="form-control">
                          <option value="Educate Children">
                            Educate Children
                          </option>
                          <option value="Child Camps">Child Camps</option>
                          <option value="Clean Water for Life">
                            Clean Water for Life
                          </option>
                          <option value="Campaign for Child Poverty">
                            Campaign for Child Poverty
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group mb-20">
                        <label>
                          <strong>Currency</strong>
                        </label>
                        <select name="currency_code" className="form-control">
                          <option value="">Select Currency</option>
                          <option value="USD" selected="selected">
                            USD - U.S. Dollars
                          </option>
                          <option value="AUD">AUD - Australian Dollars</option>
                          <option value="BRL">BRL - Brazilian Reais</option>
                          <option value="GBP">GBP - British Pounds</option>
                          <option value="HKD">HKD - Hong Kong Dollars</option>
                          <option value="HUF">HUF - Hungarian Forints</option>
                          <option value="INR">INR - Indian Rupee</option>
                          <option value="ILS">ILS - Israeli New Shekels</option>
                          <option value="JPY">JPY - Japanese Yen</option>
                          <option value="MYR">MYR - Malaysian Ringgit</option>
                          <option value="MXN">MXN - Mexican Pesos</option>
                          <option value="TWD">TWD - New Taiwan Dollars</option>
                          <option value="NZD">NZD - New Zealand Dollars</option>
                          <option value="NOK">NOK - Norwegian Kroner</option>
                          <option value="PHP">PHP - Philippine Pesos</option>
                          <option value="PLN">PLN - Polish Zlotys</option>
                          <option value="RUB">RUB - Russian Rubles</option>
                          <option value="SGD">SGD - Singapore Dollars</option>
                          <option value="SEK">SEK - Swedish Kronor</option>
                          <option value="CHF">CHF - Swiss Francs</option>
                          <option value="THB">THB - Thai Baht</option>
                          <option value="TRY">TRY - Turkish Liras</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group mb-20">
                        <label>
                          <strong>How much do you want to donate?</strong>
                        </label>
                        <select name="amount" className="form-control">
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="200">200</option>
                          <option value="500">500</option>
                          <option value="other">Other Amount</option>
                        </select>
                        <div id="custom_other_amount">
                          <label>
                            <strong>Custom Amount:</strong>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-flat btn-dark btn-theme-colored mt-10 pl-30 pr-30"
                          data-loading-text="Please wait..."
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/*
                            <!-- Paypal Onetime Form -->*/}
                <form
                  id="paypal_donate_form-onetime"
                  className="hidden"
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                >
                  <input type="hidden" name="cmd" value="_donations" />
                  <input
                    type="hidden"
                    name="business"
                    value="accounts@thememascot.com"
                  />
                  <input
                    type="hidden"
                    name="item_name"
                    value="Educate Children"
                  />{" "}
                  {/*
                                <!-- updated dynamically -->*/}
                  <input type="hidden" name="currency_code" value="USD" />{" "}
                  {/*
                                <!-- updated dynamically -->*/}
                  <input type="hidden" name="amount" value="20" />{" "}
                  {/*
                                <!-- updated dynamically -->*/}
                  <input type="hidden" name="no_shipping" value="1" />
                  <input type="hidden" name="cn" value="Comments..." />
                  <input type="hidden" name="tax" value="0" />
                  <input type="hidden" name="lc" value="US" />
                  <input type="hidden" name="bn" value="PP-DonationsBF" />
                  <input
                    type="hidden"
                    name="return"
                    value="http://www.yoursite.com/thankyou.html"
                  />
                  <input
                    type="hidden"
                    name="cancel_return"
                    value="http://www.yoursite.com/paymentcancel.html"
                  />
                  <input
                    type="hidden"
                    name="notify_url"
                    value="http://www.yoursite.com/notifypayment.php"
                  />
                  <input type="submit" name="submit" />
                </form>
                {/*
                            <!-- Paypal Recurring Form -->*/}
                <form
                  id="paypal_donate_form-recurring"
                  className="hidden"
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="cmd"
                    value="_xclick-subscriptions"
                  />
                  <input
                    type="hidden"
                    name="business"
                    value="accounts@thememascot.com"
                  />

                  <input
                    type="hidden"
                    name="item_name"
                    value="Educate Children"
                  />
                  {/*
                                <!-- updated dynamically -->*/}
                  <input type="hidden" name="currency_code" value="USD" />
                  {/*
                                <!-- updated dynamically -->*/}
                  <input type="hidden" name="a3" value="20" />
                  {/*
                                <!-- updated dynamically -->*/}
                  <input type="hidden" name="t3" value="D" />
                  {/*
                                <!-- updated dynamically -->*/}

                  <input type="hidden" name="p3" value="1" />
                  <input type="hidden" name="rm" value="2" />
                  <input type="hidden" name="src" value="1" />
                  <input type="hidden" name="sra" value="1" />
                  <input type="hidden" name="no_shipping" value="0" />
                  <input type="hidden" name="no_note" value="1" />
                  <input type="hidden" name="lc" value="US" />
                  <input type="hidden" name="bn" value="PP-DonationsBF" />
                  <input
                    type="hidden"
                    name="return"
                    value="http://www.yoursite.com/thankyou.html"
                  />
                  <input
                    type="hidden"
                    name="cancel_return"
                    value="http://www.yoursite.com/paymentcancel.html"
                  />
                  <input
                    type="hidden"
                    name="notify_url"
                    value="http://www.yoursite.com/notifypayment.php"
                  />
                  <input type="submit" name="submit" />
                </form>
                {/*
                            <!-- ===== END: Paypal Both Onetime/Recurring Form ===== -->*/}
              </div>
              <div
                className="col-md-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h3 className="title text-black-666 line-bottom">
                  Branches{" "}
                  <span className="text-theme-colored"> Worldwide</span>
                </h3>
                <div className="row mt-20 multi-row-clearfix">
                  <div className="owl-carousel-2col" data-nav="true">
                    <div className="item">
                      <div className="box-hover-effect effect1 mb-sm-30">
                        <div className="thumb">
                          <a href="/">
                            <img
                              className="img-fullwidth mb-20"
                              src="images/services/o1.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="caption">
                          <h4 className="text-uppercase letter-space-1 mt-0">
                            Office
                            <span className="text-theme-colored">
                              {" "}
                              in Africa
                            </span>
                          </h4>
                          <p>
                            Quam distinctio quis perspiciatis facere accusamus
                            perferendis eligendi odit cum
                          </p>
                          <p>
                            <a
                              href="/"
                              className="btn btn-theme-colored btn-flat mt-10 btn-sm"
                              role="button"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box-hover-effect effect1 mb-sm-30">
                        <div className="thumb">
                          <a href="/">
                            <img
                              className="img-fullwidth mb-20"
                              src="images/services/o2.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="caption">
                          <h4 className="text-uppercase letter-space-1 mt-0">
                            Office
                            <span className="text-theme-colored">
                              {" "}
                              in Nepal
                            </span>
                          </h4>
                          <p>
                            Quam distinctio quis perspiciatis facere accusamus
                            perferendis eligendi odit cum
                          </p>
                          <p>
                            <a
                              href="/"
                              className="btn btn-theme-colored btn-flat mt-10 btn-sm"
                              role="button"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box-hover-effect effect1 mb-sm-30">
                        <div className="thumb">
                          <a href="/">
                            <img
                              className="img-fullwidth mb-20"
                              src="images/services/o3.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="caption">
                          <h4 className="text-uppercase letter-space-1 mt-0">
                            Office
                            <span className="text-theme-colored">
                              {" "}
                              in India
                            </span>
                          </h4>
                          <p>
                            Quam distinctio quis perspiciatis facere accusamus
                            perferendis eligendi odit cum
                          </p>
                          <p>
                            <a
                              href="/"
                              className="btn btn-theme-colored btn-flat mt-10 btn-sm"
                              role="button"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="box-hover-effect effect1 mb-sm-30">
                        <div className="thumb">
                          <a href="/">
                            <img
                              className="img-fullwidth mb-20"
                              src="images/services/o4.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="caption">
                          <h4 className="text-uppercase letter-space-1 mt-0">
                            Office
                            <span className="text-theme-colored">
                              {" "}
                              in Africa
                            </span>
                          </h4>
                          <p>
                            Quam distinctio quis perspiciatis facere accusamus
                            perferendis eligendi odit cum
                          </p>
                          <p>
                            <a
                              href="/"
                              className="btn btn-theme-colored btn-flat mt-10 btn-sm"
                              role="button"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
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
