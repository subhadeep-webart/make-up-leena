import CommonBanner from "@/componentes/common/CommonBanner";
import ContactForm from "@/componentes/contact/ContactForm";
import SpotMap from "@/componentes/contact/SpotMap";

const Contact = () => {
    return (
        <>
            <CommonBanner backgroundImage={'/images/contact-innerbanner.webp'} bannerText={"Contact Us"} />
            <ContactForm />
            <SpotMap />
        </>
    )
}

export default Contact;