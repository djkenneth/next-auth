// Components
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

function CoreLayout({ children, title = "This is the default title" }) {
  return (
    <div>
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default CoreLayout;
