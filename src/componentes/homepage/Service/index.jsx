const Services = () => {
  return (
    <>
      <section className="p-v-100 service bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bannerBox row">
                <div className="col-md-6">
                  <h2>
                    Expert Services <br />
                    That Deliver
                    <br />
                    Results
                  </h2>
                  <a href="#">
                    <img src={"/images/7.webp"} alt="image" className="img-fluid" />
                    <h6 className="two">Makeup Hairstyle</h6>
                  </a>
                  <a href="#">
                    <img src={"/images/5.webp"} alt="image" className="img-fluid" />
                    <h6 className="two">Traditional Makeup</h6>
                  </a>
                  <a href="#" className="makeup">
                    <img src={"/images/3.webp"} alt="image" className="img-fluid" />
                    <h6 className="two">Wedding Makeup</h6>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="#">
                    <img src={"/images/6.webp"} alt="image" className="img-fluid" />
                    <h6 className="one">Eye Makeup</h6>
                  </a>
                  <a href="#">
                    <img src={"/images/4.webp"} alt="image" className="img-fluid" />
                    <h6 className="one">Makeup Trial</h6>
                  </a>
                  <a href="#">
                    <img src={"/images/1.webp"} alt="image" className="img-fluid" />
                    <h6 className="three">Asian Makeup</h6>
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

export default Services;
