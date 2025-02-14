import Footer from "../templates/Footer";
import Header from "../templates/Header";
import ContactMeSection from "../view/HomePage/ContactMeSection/ContactMeSection";

const Layout = ({ children }) => {
  return (
    <div className="text-[#030712] font-inter-tight max-w-[1200px] mx-auto ">
      <div className="px-5 lg:px-[72px]">
        <Header />
        {children}
      </div>
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export default Layout;
