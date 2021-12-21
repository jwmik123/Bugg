import "tailwindcss/tailwind.css";
import "../styles/global.css";

import { useEffect, useState } from "react";

import Cursor from "../components/Cursor";

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
    window.onLoad = () => {
      if (!window.location.hash) {
        window.location.reload(true);
      }
    };
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
