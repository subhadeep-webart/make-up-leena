import AdditionalService from "@/componentes/service/AdditonalService";
import BehindScene from "@/componentes/service/BehindScene";
import Bookings from "@/componentes/service/Bookings";
import ChoosingHairstyle from "@/componentes/service/ChoosingHairstyle";
import ClientTestimonial from "@/componentes/service/ClientTestimonial";
import Collaboration from "@/componentes/service/Collaboration";
import Conclusion from "@/componentes/service/Conclusion";
import DosDont from "@/componentes/service/DosDont";
import Faq from "@/componentes/service/Faq";
import FaqHairstyle from "@/componentes/service/FaqHairstyle";
import FinalThoughts from "@/componentes/service/FinalThoughts";
import MediaCoverage from "@/componentes/service/MediaCoverage";
import OverView from "@/componentes/service/OverView";
import PersonalizedApproach from "@/componentes/service/PersonalizedApproach";
import PreWeding from "@/componentes/service/PreWeding";
import ReadyToShine from "@/componentes/service/ReadyToShine";
import ServiceBanner from "@/componentes/service/ServiceBanner";
import ServiceCategory from "@/componentes/service/ServiceCategory";
import ServiceIntroduction from "@/componentes/service/ServiceIntroduction";
import ServiceOffered from "@/componentes/service/ServiceOffered";
import TipsBride from "@/componentes/service/TipsBride";
import TrendHairstyle from "@/componentes/service/TrendHairstyle";
import Trials from "@/componentes/service/Trials";

const Service = () => {
    return (
        <>
            <ServiceBanner />
            <ServiceIntroduction/>
            <ChoosingHairstyle/>
            <ServiceCategory/>
            <Trials/>
            <OverView/>
            <PersonalizedApproach/>
            <ServiceOffered/>
            <AdditionalService/>
            <ClientTestimonial/>
            <Collaboration/>
            <MediaCoverage/>
            <BehindScene/>
            <PreWeding/>
            <TrendHairstyle/>
            <TipsBride/>
            <DosDont/>
            <FaqHairstyle/>
            <Bookings/>
            <FinalThoughts/>
            <ReadyToShine/>
            <Faq/>
            <Conclusion/>
        </>
    )
}

export default Service;