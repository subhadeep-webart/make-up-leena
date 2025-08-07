import React from "react";

const About = () => {
  return (
    <>
      <section className="about p-v-100 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src={"/images/image5.webp"}
                alt="about"
                className="img-fluid border-129 w-100"
              />
            </div>
            <div className="col-md-7">
              <div className="text">
                <h2>About me</h2>
                <p>
                  Hi, I’m Leena and I have been a passionate makeup artist for
                  just over 20 years. From a very young age I was surrounded by
                  creativity as my dad and uncle were wedding photographers and
                  videographers.
                  <br /> <br />
                  Me and my sisters would sit for hours at the table sorting
                  photos, listening to classNameic tunes and watch them as they
                  selected photos ready to be stuck into album’s. I used to look
                  at the brides in the photos admiring the beautiful outfits and
                  thinking why they looked grey in all the makeup (foundation
                  tones weren’t the best then!).
                </p>
                <div className="button">
                  <a href="#" className="btn-thm">
                    <span>More about us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
