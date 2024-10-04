import {
    HomeModernIcon, UserGroupIcon, AcademicCapIcon
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import { SelectedPage } from "@/shared/types"
import HText from "@/shared/HText";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Home Modern Text"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "User Group Text"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Academic Text"
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    console.log(setSelectedPage);
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={
                    () => setSelectedPage(SelectedPage.Benefits)
                }
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We provided world class fitness equipment, trainers
                        and classes get to you to your ultimate fitness goals
                        with ease. We provide true care into each and every
                        member.
                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className={`
                        mt-5 md:flex items-center justify-between gap-8
                    `}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img 
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div
                                className={`
                                    before:absolute
                                    before:-top-20
                                    before:-left-20
                                    before:z-[1]
                                    before:content-abstractwaves
                                `}>
                                <motion.div
                                    className="md:my-5 md:w-3/5"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}                                                    
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <motion.div
                            className="md:my-5 md:w-3/5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}                       
                        >
                            <p className="my-5">
                                Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text
                            </p>
                            <p className="mb-5">
                                Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text Somte text
                            </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits