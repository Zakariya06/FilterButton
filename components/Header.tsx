import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Container } from "react-bootstrap";
const Header: React.FC = () => {
  return (
    <div className="HeaderSection">
      <a href="#" className="brandLogo">
        <Image src={logo} className="brandLogoImage" alt="logo" />
      </a>
    </div>
  );
}

export default Header;
