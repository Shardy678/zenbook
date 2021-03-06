import "./App.css";
import BestSellerSection from "./components/BestSellerSection";
import HeroSection from "./components/HeroSection";
import AdSection from "./components/AdSection";
import OtherBookSection from "./components/OtherBookSection";
import OurCustomerSection from "./components/OurCustomerSection";
import SeeOurProducts from "./components/SeeOurProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSection />
      <BestSellerSection />
      <AdSection />
      <OtherBookSection />
      <OurCustomerSection />
      <SeeOurProducts />
      <Footer />
    </>
  );
}

export default App;
