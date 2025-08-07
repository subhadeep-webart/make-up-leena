import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-logo">
                      <Link
                        href="/"
                        className=" d-flex justify-content-center logo"
                      >
                        <img
                          src={"/images/makeup-by-leena-footerlogo.webp"}
                          alt="logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-list">
                      <h5>Useful Links</h5>
                      <ul>
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About me</Link>
                        </li>
                        <li>
                          <Link href="/service">Services</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-list">
                  <h5>Contact</h5>
                  <p>
                    Call <br />
                    <a href="tel:+44 (0) 7985 245968"></a> +44 (0) 7985 245968
                  </p>
                  <p>
                    Email <br />
                    <a href="mailto:info@makeupbyleena.com"></a>
                    info@makeupbyleena.com
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-image">
                  <img src={"/images/image4.webp"} alt="image" className="img-fluid" />
                  <img src={"/images/image3.webp"} alt="image" className="img-fluid" />
                  <img src={"/images/image6.webp"} alt="image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-footer">
          <div className="container">
            <h5 className="text-center">Booking by appointment only</h5>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  COPYRIGHT © <Link href="/">Makeup by Leena</Link> 2025 All
                  rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-end">
                <p className="wrap">
                  <Link href="#">COOKIE POLICY</Link>
                  <Link href="#">FREQUENTLY ASKED QUESTIONS</Link>
                  <Link href="#">GDPR</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
