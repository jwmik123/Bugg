import Header from "../components/Header";

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
  return (
    <div>
      <Header />
      <div className="h-84 w-full">
        <div className=""></div>
      </div>
    </div>
  );
}

export default serviceDetailPage;
