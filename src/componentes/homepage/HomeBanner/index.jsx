const HomeBanner = () => {
  return (
    <>
      <section className="banner bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <h1>Makeup by Leena</h1>
                <div className="circle relative">
                  <h5>Our service areas</h5>
                  <p>
                    Makeup by Leena - Premium Makeup Artist in <br /> London for
                    Weddings and Events
                  </p>
                  <img src={"/images/map.webp"} alt="map" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
