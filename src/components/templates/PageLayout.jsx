import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

function PageLayout({ overlayNav = false, children, className = "" }) {
  return (
    <>
      <Navbar overlay={overlayNav} />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
