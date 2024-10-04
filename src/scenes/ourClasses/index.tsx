import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import { ClassType } from "@/shared/types";
import Class from "./Class";


const classes: Array<ClassType> = [
    {
        name: "Wheight Training Clasees",
        description: "Wheight Training Clasees description",
        image: image1
    },
    {
        name: "Training Training Clasees",
        description: "Wheight Training Clasees description",
        image: image2
    },
    {
        name: "Fitness Training Clasees",
        image: image3
    },
    {
        name: "Wheight Training Clasees",
        description: "Adventure Training Clasees description",
        image: image4
    },
    {
        name: "Wheight Training Clasees",
        image: image5
    },
    {
        name: "Wheight Training Clasees",
        description: "Lorem Training Clasees description",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    console.log(setSelectedPage);

    return (
        <section id="ourclasses" className="w-full bg-primary-100">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="md:w-3/5 py-10">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
};

export default OurClasses;
