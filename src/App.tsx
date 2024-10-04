import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar/index";
import Home from "@/scenes/home/index";
import Benefits from "@/scenes/benefits/index";
import OurClasses from "@/scenes/ourClasses/index";
import ContactUs from "./scenes/contactUs";
import Footer from "@/scenes/footer";
import { SelectedPage } from "@/shared/types";



function App() {
  const [selectedPage, setSelectedPage] =
    useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
