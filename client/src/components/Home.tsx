import { useEffect } from "react";
import Carousel from "./Carousel";
import { gsap } from "gsap";
import '../stylesheets/Home.css'; // Adjust the path if necessary

function Home() {
  useEffect(() => {
    // Background gradient animation
    gsap.to(".background", {
      backgroundPosition: "200% 0%",
      duration: 15,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white p-20">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 opacity-50 pointer-events-none background"></div>

      {/* Carousel Component */}
      <Carousel />
    </div>
  );
}

export default Home;