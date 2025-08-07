import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact bg">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-md-8">
              <div class="form-part">
                <h3>Contact us</h3>
                <form class="row g-3">
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="col-md-12">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>

                  <div class="col-md-6">
                    <div
                      class="input-group date datepicker"
                      data-date-format="mm-dd-yyyy"
                    >
                      <input
                        class="form-control w-100"
                        type="text"
                        readOnly
                        placeholder="Booking date"
                      />
                      <span class="input-group-addon">
                        <img
                          src="assets/image/calender.png"
                          alt="calender"
                          loading="lazy"
                          class="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <input
                        class="form-control w-100"
                        type="text"
                        readOnly
                        placeholder="Booking time"
                      />
                      <span class="input-group-addon">
                        <img
                          src="assets/image/time.png"
                          alt="time"
                          loading="lazy"
                          class="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Venue"
                    />
                  </div>
                  <div class="col-md-6">
                    <select
                      class="form-select form-control form-select-sm"
                      aria-label=".form-select-sm example"
                      required=""
                    >
                      <option value="">Ceremony type </option>
                      <option value="Father ">Father </option>
                      <option value="Boss">Boss</option>
                      <option value="Colleagues ">Colleagues </option>
                      <option value="Others ">Others </option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <textarea
                      class="form-control form-message"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="col-12 mt-5 text-center">
                    <div class="about-one_button">
                      <button class="btn-thm" type="submit">
                        <span class="btn-wrap">
                          <span class="text-one">Send</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
