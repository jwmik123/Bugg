import "tailwindcss/tailwind.css";
import "../styles/global.css";

import { useEffect } from "react";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import AOS from "aos";

const progress = new ProgressBar({
  size: 4,
  color: "#E5BE01",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();

    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px";
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
