'use client'

import Login from '@/components/Login'
import React from 'react'
import { Parallax } from 'react-parallax'

const login = () => {
    return (
        <Parallax
            blur={10}
            bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbd%2F34%2F8c%2Fbd348cee7fcedb85c581454a7d709e25.jpg&f=1&nofb=1&ipt=8051af08e3e836e6c4f7685da0e323ce85e98361c73540d5b2709ad20225cdd1&ipo=images"
            bgImageAlt="the cat"
            strength={500}
        >

            <Login />
        </Parallax>
    )
}

export default login