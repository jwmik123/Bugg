import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    // <div>
    //   <div className="bg-gray-light text-white w-full flex">
    //     <div className="w-full md:w-1/2">
    //       <p>Terms of use</p>
    //       <p>Privacy Policy</p>
    //     </div>
    //     <div className="flex w-full md:w-1/2 justify-center items-center gap-4">
    //       <FaFacebook className="w-10 h-10" />
    //       <FaInstagram className="w-10 h-10" />
    //       <FaLinkedin className="w-10 h-10" />
    //       <FaGithub className="w-10 h-10" />
    //     </div>
    //   </div>

    //   <footer className="text-gray bg-yellow py-4 flex flex-col md:flex-row items-center justify-center gap-1 text-sm">
    //     {/* <p>BTW: NL863137684B01</p> */}
    //     <p className="font-light">
    //       &copy; Copyright 2021 BUGG. All rights reserved.
    //     </p>
    //     {/* <p>KVK: 84222441</p> */}
    //   </footer>
    // </div>

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
