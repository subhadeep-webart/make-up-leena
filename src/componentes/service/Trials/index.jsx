const Trials = () => {
    return (
        <section className="trials">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-80">
                        <h2>Consultations & Trials</h2>
                        <p>Once you have shortlisted potential hairstylists, schedule consultations and trials. This is a vital
                            step to ensure you are comfortable with the stylist and their work. During the consultation,
                            discuss the following:</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="trails-box">
                            <h6>Hair Type</h6>
                            <p>Share details about your hair type and length. This helps the stylist recommend suitable styles.
                            </p>
                        </div>
                        <div className="trails-box">
                            <h6>Wedding Theme</h6>
                            <p>Inform them about your wedding theme. The hairstyle should complement the overall look.</p>
                        </div>
                        <div className="trails-box">
                            <h6>Accessories</h6>
                            <p>Show any hair accessories you plan to wear. The stylist can incorporate them into the hairstyle.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="trailImg">
                            <img src="/images/service/service-2.webp" alt="trails" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="trails-box">
                            <h6>Comfort</h6>
                            <p>Ensure the hairstyle feels comfortable and secure.</p>
                        </div>
                        <div className="trails-box">
                            <h6>Longevity</h6>
                            <p>The style should last throughout the event.</p>
                        </div>
                        <div className="trails-box">
                            <h6>Appearance</h6>
                            <p>It should look stunning from all angles, especially in photos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Trials;