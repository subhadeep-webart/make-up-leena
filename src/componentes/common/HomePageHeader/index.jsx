import Link from "next/link";
import { NAV_LINKS } from "@/utils/constant";
const HomePageHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-12">
                        <div className=" menu">
                            <ul>
                                {NAV_LINKS.map((link, index) => (
                                    <li key={index}>
                                        {link.isLogo ? (
                                            <Link href={link.href} className="d-flex justify-content-center logo">
                                                <img
                                                    src="/images/makeup-by-leena-logo.webp"
                                                    alt="logo"
                                                    className="img-fluid"
                                                />
                                            </Link>
                                        ) : (
                                            <Link href={link.href}>{link.name}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomePageHeader;