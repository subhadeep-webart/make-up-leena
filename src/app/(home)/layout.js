import Footer from "@/componentes/common/Footer";
import HomePageHeader from "@/componentes/common/HomePageHeader";

export default function HomeLayout({ children }) {
    return (
        <>
            <HomePageHeader />
            {children}
        </>
    );
}
