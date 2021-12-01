import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full flex justify-between py-4 px-6 md:px-20 items-center text-white bg-gray">
      <div className="font-staat text-4xl">
        <h1>BUGG.</h1>
      </div>
      <div>
        <p className="font-light text-xs hidden md:block">
          &copy; Copyright 2022 BUGG. All rights reserved.
        </p>
      </div>
      <div className="flex gap-2">
        <FaFacebook className="footer-icon" />
        <FaInstagram className="footer-icon" />
        <FaLinkedin className="footer-icon" />
        <FaGithub className="footer-icon" />
      </div>
    </footer>
  );
}

export default Footer;
