'use client'
import React from "react";
import "./App.scss";
import { easeIn, motion } from "framer-motion";
import { FaBehance, FaDribbble } from 'react-icons/fa';
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5';
import { IconContext } from "react-icons";
import Link from "next/link";
const Header = () => {
  return (
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
        <Link href="/">
          <motion.div className="logo_wrapper" variants={header}>your<span className="secondary-color">brand</span>stories</motion.div>
        </Link>
        <motion.span variants={btnGroup} className="flex space-x-10">
          <Link href="/login">
            <motion.div className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Log In
              <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
          </Link>
          <Link href="/about">
            <motion.div className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>About Us
            </motion.div>
          </Link>
        </motion.span>
      </motion.header >
    </motion.div >

  );
};

export default Header;
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
}
const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeIn }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeIn
    }
  }
};


const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeIn }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeIn
    }
  }
};

