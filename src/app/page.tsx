import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slide from "@/components/Slide";
import Hero2 from "@/components/Hero2";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import AdmissionPopup from "@/components/AdmissionPopup";

export default function Home() {
  return (
  <div>
    <AdmissionPopup />
    <Header />
    <Hero /> 
    <Slide />
    <Hero2 /> 
    <Card />
    <Footer />
  </div>
  );
}
