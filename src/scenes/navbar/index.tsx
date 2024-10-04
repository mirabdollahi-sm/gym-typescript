// import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "@/assets/Logo.png";
// import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/16/solid";
// import ActionButton from "@/shared/ActionButton";
import BigScreenNavbar from "./bigScreenNabar";
import SmallScreenNavbar from "./smallScreenNavbar";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div className={
        `${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`
      }>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img alt="logo" src={Logo} />

            {/* Right side */}
            {isAboveMediumScreens
              ? <BigScreenNavbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              : (
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )
            }
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <SmallScreenNavbar
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
      )}
    </nav>
  );
};

export default Navbar;
