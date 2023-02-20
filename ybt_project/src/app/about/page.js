'use client'
import About from '@/components/About'

import React from 'react'
import { Parallax } from 'react-parallax'

const about = () => {
    return (
        <Parallax
            blur={10}
            bgImage=""
            bgImageAlt="the cat"

            strength={500}

        >

            <About />
        </Parallax>
    )
}

export default about