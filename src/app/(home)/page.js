import About from "@/componentes/homepage/About";
import Contact from "@/componentes/homepage/Contact";
import HomeBanner from "@/componentes/homepage/HomeBanner";
import Pricing from "@/componentes/homepage/Pricing";
import Services from "@/componentes/homepage/Service";
import Elegant from "@/componentes/homepage/Special";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <About />
      <Services />
      <Elegant />
      <Pricing />
      <Contact />
    </>
  );
}
