import { SelectedPage } from "@/shared/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "./link";


type Props = {
    isMenuToggled: boolean;
    setIsMenuToggled: (value: boolean) => void;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

function SmallScreenNavbar({
    isMenuToggled, setIsMenuToggled, selectedPage, setSelectedPage
}: Props) {
    return (
        <div
            className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* CLOS ICON */}
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                </button>
            </div>
            { /* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Our Clases"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </div>
    );
}

export default SmallScreenNavbar;
