import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingDetail from "@/components/PricingDetail";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import circleone from '../public/assests/circleone.png'
import poly2 from '../public/assests/poly2.png'
import poly1 from '../public/assests/poly1.png'

function App() {
  return (
    <div className="relative ">
      <Image src={circleone} alt="circleone" className="absolute z-10" />
      <Image src={poly2} alt="poly2" className="absolute scale-125" />
      <Image src={poly1} alt="poly1" className="absolute right-0"  />
      <Header />
      <Hero />
      <About />
      <PricingDetail />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
