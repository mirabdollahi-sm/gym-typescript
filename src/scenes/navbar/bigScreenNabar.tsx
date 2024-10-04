import { SelectedPage } from "@/shared/types";
import Link from "./link";
import ActionButton from "@/shared/ActionButton";


type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
};

function BigScreenNavbar({selectedPage, setSelectedPage}: Props) {
    const flexBetween = "flex items-center justify-between";
    return (
        <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
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
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
            <div className={`${flexBetween} gap-8`}>
                <p>Sing In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                </ActionButton>
            </div>
        </div>
    );
}

export default BigScreenNavbar;
