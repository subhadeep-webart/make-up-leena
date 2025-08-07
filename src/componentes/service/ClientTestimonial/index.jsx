const ClientTestimonial = () => {
    return (
        <section className="service-wedding testimonials pink p-v-100"
            style={{ backgroundImage: "url('/images/service/9.webp')" }}>
            <div className="container">
                <div className="row mb-48 align-items-center">
                    <div className="col-md-12  mt-48">
                        <h2>Client Testimonials</h2>
                        <p>Choosing the perfect bridal hairstylist in London is crucial for your big day. Makeup by Leena has
                            garnered rave reviews for transforming brides into their most beautiful selves. Client testimonials
                            reflect the exceptional experience and service provided by Leena. Let’s dive into what real clients
                            have to say.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Sarah K.</h5>
                        <p>“Leena made me feel like a princess. My hair looked stunning, and it stayed perfect all day.”</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Emma R.</h5>
                        <p>“Leena was amazing! She understood exactly what I wanted and delivered beyond my expectations.”</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Jessica W.</h5>
                        <p>“The best decision I made was choosing Leena. Her skills are unmatched, and she made my day
                            special.”</p>
                    </div>

                </div>
                <div className="row justify-content-center client-table">
                    <div className="col-md-10">
                        <p className="text-center ">Some of the notable media features include:</p>
                        <div className="category-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th style={{width: "349px"}}>Publication</th>
                                        <th>Feature</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Bridal Bliss Magazine</td>
                                        <td>Top 10 Bridal Hairstylists in London.</td>

                                    </tr>
                                    <tr>

                                        <td>Wedding Wonders</td>
                                        <td>Exclusive Interview and Style Showcase.</td>

                                    </tr>
                                    <tr>
                                        <td>Elegant Brides</td>
                                        <td>Feature on Timeless Bridal Hairstyles.</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientTestimonial;