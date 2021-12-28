import "tailwindcss/tailwind.css";
import "../styles/global.css";

import { useEffect } from "react";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import AOS from "aos";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-215970187-1";

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
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
