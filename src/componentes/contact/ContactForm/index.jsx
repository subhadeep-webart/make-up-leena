import Image from "next/image";
const ContactForm = () => {
    return (
        <section className="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <Image src="/images/contact-image.webp" alt="contact" className="img-fluid" height={784} width={581} />
                    </div>
                    <div className="col-md-7">
                        <div className="box">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <div className="form-group mt-0">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select className="form-select form-control form-select-sm"
                                            aria-label=".form-select-sm example" required="">
                                            <option value="">Which service are you interested in? </option>
                                            <option value="Father ">Father </option>
                                            <option value="Boss">Boss</option>
                                            <option value="Colleagues ">Colleagues </option>
                                            <option value="Others ">Others </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control form-message" rows="3" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 mt-5 text-center">
                                    <div className="about-one_button">
                                        <button className="btn-thm" type="submit">
                                            <span className="btn-wrap">
                                                <span className="text-one">Send</span>
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
    )
}

export default ContactForm;