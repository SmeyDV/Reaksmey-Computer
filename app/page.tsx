import Hero from "../components/Hero";
import Aside from "../components/Aside";
import Deals from "../components/Deals";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <div className="w-full">
          <Hero />
        </div>
      </div>
      <Deals />
      <Footer />
    </div>
  );
}
