// Components
import Header from "./Header";
import Footer from "./Footer";

function CoreLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default CoreLayout;
