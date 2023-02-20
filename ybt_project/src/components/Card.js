import React from 'react';
import { IoMailOutline, IoTimeOutline, IoDocumentTextOutline, IoMdTime, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill } from "react-icons/io5";
import { FcAddImage } from "react-icons/fc"
import { IconContext } from "react-icons";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: .2
        }
    }
}


const hoverEffect = {
    whileHover: {
        scale: 1.5, rotate: 630, borderRadius: "100%"
    },
    whileTap: {
        scale: .8, rotate: 630, borderRadius: "100%"
    },
}



function Card() {
    return (
        <motion.div className="service_container">
            <div className="title_wrapper">
                <motion.span className="service_title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, delay: 1.8 }}
                >What we Do</motion.span>
                <motion.h2
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5, delay: 1 }}
                >Save Time Managing Social Media<br />For Your Business.</motion.h2>
            </div>


            <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{ once: false }}>

                <motion.div className="card" variants={item}>
                    <motion.span className="service_icon" style={{ backgroundColor: "#ddfbf9" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
                            <FcAddImage />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>AI-generated images<br />From Text</h3>
                    <Link href="/image">
                        <span>Try Out</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </Link>
                </motion.div>


                <motion.div className="card" variants={item}>
                    <motion.span className="service_icon" style={{ backgroundColor: "#fffada" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
                            <IoDocumentTextOutline />
                        </IconContext.Provider>
                    </motion.span>
                    <h3>AI generated text<br />For your Blog</h3>
                    <Link href="/text">
                        <span>Try Out</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward />
                        </IconContext.Provider>
                    </Link>
                </motion.div>
                <motion.div className="card dark" variants={item}>
                    {/* <Image src="" alt="line" className="line" />
                     */}
                    <motion.span className="service_icon" style={{ backgroundColor: "#fffada" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
                            <IoTimeOutline />
                        </IconContext.Provider>
                    </motion.span><br />
                    <p className='text-purple-100 text-lg p-0'>And a Lot coming</p>
                    <Link href="#">
                        <span>Up more...</span>
                        <motion.span className="service_icon" style={{ backgroundColor: "#14da8f" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
                                <IoChevronForward />
                            </IconContext.Provider>
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Card



