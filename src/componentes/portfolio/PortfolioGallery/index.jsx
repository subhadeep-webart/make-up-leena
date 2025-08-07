import ImageGallery from "./ImageGallery";

const PortfolioGallery = () => {
    return (
        <section className="portfolio-page">
            <div className="container">
                <div className="row g-3">
                    <ImageGallery/>
                    <div className="col-md-12">
                        <img src="/images/portfolio/7.webp" alt="gallery-image" className="img-fluid" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PortfolioGallery;