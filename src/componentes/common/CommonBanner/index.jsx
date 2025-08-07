const CommonBanner = ({ backgroundImage, bannerText }) => {
    return (
        <section className="inner-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{bannerText}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommonBanner;