"use client";
import "./App.scss";

import creator from "src/assets/135450-creator-flow-working-with-creators.json"
import { easeIn, motion } from "framer-motion";
import Card from "./Card";

import About from "./About";
import Login from "./Login";

import Lottie from 'lottie-react';
import { Parallax } from "react-parallax";



const fadeInUp = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: easeIn,
        },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.5,
            ease: easeIn,
        },
    },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};

const star = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.8, ease: easeIn },
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease: easeIn,
        },
    },
};
function Landing() {
    return (


        <motion.div initial="initial" animate="animate">
            <motion.div
                className="content_wrapper"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="left_content_wrapper">
                    <motion.h2>
                        <motion.span
                            variants={firstName}
                            initial="initial"
                            animate="animate"
                            className="first"
                        >
                            <motion.span variants={letter}>F</motion.span>
                            <motion.span variants={letter}>o</motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter} className="second">
                                C
                            </motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>a</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>o</motion.span>
                            <motion.span variants={letter}>r</motion.span>
                            <motion.span variants={letter}>s</motion.span>
                        </motion.span>
                        <motion.span
                            variants={lastName}
                            initial="initial"
                            animate="animate"
                            className="last"
                        >
                            <motion.span variants={letter}>W</motion.span>
                            <motion.span variants={letter}>i</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>h</motion.span>
                            <motion.span variants={letter} className="second">
                                L
                            </motion.span>
                            <motion.span variants={letter}>o</motion.span>
                            <motion.span variants={letter}>v</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                        </motion.span>
                    </motion.h2>

                    <motion.p variants={fadeInUp}>
                        If Subho Loves Meghna, Rohit loves Sudipto and Adhrit finds CR& hot
                        , when will Jyoti be India's PM
                    </motion.p>

                </div>

                <motion.div className="right_content_wrapper">
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    <Lottie animationData={creator} loop={true} />;

                </motion.div>
            </motion.div>
            <br />
            <br />
            <Parallax
                blur={10}
                bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbd%2F34%2F8c%2Fbd348cee7fcedb85c581454a7d709e25.jpg&f=1&nofb=1&ipt=8051af08e3e836e6c4f7685da0e323ce85e98361c73540d5b2709ad20225cdd1&ipo=images"
                bgImageAlt="the cat"
                strength={500}
            >
                <About />
            </Parallax>
            <Card />
            <Parallax
                blur={10}
                bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbd%2F34%2F8c%2Fbd348cee7fcedb85c581454a7d709e25.jpg&f=1&nofb=1&ipt=8051af08e3e836e6c4f7685da0e323ce85e98361c73540d5b2709ad20225cdd1&ipo=images"
                bgImageAlt="the cat"
                strength={500}
            >

                <Login />
            </Parallax>
        </motion.div>


    );
}

export default Landing;
