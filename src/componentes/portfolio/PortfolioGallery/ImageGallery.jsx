import FancyboxWrapper from "@/componentes/provider/FancyboxProvider";
const ImageGallery = () => {
    return (
        <FancyboxWrapper>
            <div className="col-md-4">
                <a data-fancybox="gallery" href="/images/portfolio/4.webp" data-caption="gallery-image">
                    <img src="/images/portfolio/4.webp" className="w-100" alt="gallery-image" />
                </a>
            </div>
            <div className="col-md-4">
                <a data-fancybox="gallery" href="/images/portfolio/1.webp" data-caption="gallery-image">
                    <img src="/images/portfolio/1.webp" className="w-100" alt="gallery-image" />
                </a>
            </div>
            <div className="col-md-4">
                <a data-fancybox="gallery" href="/images/portfolio/2.webp" data-caption="gallery-image">
                    <img src="/images/portfolio/2.webp" className="w-100" alt="gallery-image" />
                </a>
            </div>
            <div className="col-md-4">
                <a data-fancybox="gallery" href="/images/portfolio/3.webp" data-caption="gallery-image">
                    <img src="/images/portfolio/3.webp" className="w-100" alt="gallery-image" />
                </a>
            </div>
            <div className="col-md-4">
                <a data-fancybox="gallery" href="/images/portfolio/6.webp" data-caption="gallery-image">
                    <img src="/images/portfolio/6.webp" className="w-100" alt="gallery-image" />
                </a>
            </div>
            <div className="col-md-4">
                <a data-fancybox="gallery" href="/images/portfolio/5.webp" data-caption="gallery-image">
                    <img src="/images/portfolio/5.webp" className="w-100" alt="gallery-image" />
                </a>
            </div>
        </FancyboxWrapper>
    )
}

export default ImageGallery;