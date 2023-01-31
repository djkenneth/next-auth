// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/globals.scss";

// Components
import CoreLayout from "../components/layout";
// import { SessionProvider } from "next-auth/react";

// function MyApp({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
function MyApp({ Component, pageProps }) {
  return (
    <CoreLayout>
      <Component {...pageProps} />
    </CoreLayout>
  );
}

export default MyApp;
