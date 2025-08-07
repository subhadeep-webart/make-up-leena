import AboutGallery from "@/componentes/about/AboutGallery";
import SelfAbout from "@/componentes/about/SelfAbout/inde";
import CommonBanner from "@/componentes/common/CommonBanner";

const About = () => {
  return (
    <>
      <CommonBanner backgroundImage={"/images/about/inner-banner.webp"} bannerText={"Introducing Leena"} />
      <SelfAbout />
      <AboutGallery />
    </>
  );
};

export default About;
