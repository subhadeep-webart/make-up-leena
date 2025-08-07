; import { NAV_LINKS } from "@/utils/constant";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header-two">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3">

              <Link href="/" className="logo"><img
                src="/images/makeup-by-leena-logo.webp" alt="logo" className="img-fluid" /></Link>

            </div>
            <div className="col-md-8">
              <div className="menu">
                <ul>
                  {NAV_LINKS.map((link, index) =>
                    !link.isLogo ? (
                      <li key={index}>
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>

            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;
