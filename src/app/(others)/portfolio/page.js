import CommonBanner from "@/componentes/common/CommonBanner";
import PortfolioGallery from "@/componentes/portfolio/PortfolioGallery";

const Portfolio = () => {
    return (
        <>
            <CommonBanner backgroundImage={"/images/portfolio/portfolio.webp"} bannerText={"Portfolio"} />
            <PortfolioGallery/>
        </>
    )
}

export default Portfolio;