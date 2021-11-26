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

    let cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", function (e) {
      let x = e.pageX;
      let y = e.pageY;
      cursor.style.left = x - 25 + "px";
      cursor.style.top = y - 20 + "px";
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
