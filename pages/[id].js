import Header from "../components/Header";
import dynamic from "next/dynamic";

import services from "../assets/dataList/dataList";

// export const getStaticPaths = async () => {
//   const paths = services.map((service) => {
//     return {
//       params: { id: service.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const data = services.id;

//   return {
//     props: { service: data },
//   };
// };

function serviceDetailPage({ service }) {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <div>
      {/* Cursor */}
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={1.5}
      />
      <Header />
      <div className="h-84 w-full">
        <div className=""></div>
      </div>
    </div>
  );
}

export default serviceDetailPage;
