'use client'
import React from 'react'
import { Parallax } from 'react-parallax'

const image = () => {
    return (
        <Parallax
            blur={10}
            bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbd%2F34%2F8c%2Fbd348cee7fcedb85c581454a7d709e25.jpg&f=1&nofb=1&ipt=8051af08e3e836e6c4f7685da0e323ce85e98361c73540d5b2709ad20225cdd1&ipo=images"
            bgImageAlt="the cat"
            strength={500}
        >
            <section className=" min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <span className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-4xl text-[#8cb1ed]">About</h2>
                        <h2 className="font-bold text-4xl text-[#8ab2f1]"> Us</h2>
                    </span>
                    <span>

                        <p className="text-base mt-4 text-[#002D74]">
                            As a team, we have a diverse set of skills and experiences. Some
                            of us are experts in front-end development, while others excel at
                            back-end development or data analysis. We're also passionate about
                            design and user experience, and we strive to create products that
                            are beautiful and easy to use. When we're not coding, you can find
                            us exploring new technologies and brainstorming new ideas. We're
                            always looking for new ways to push the limits of what we can
                            create, and we're never satisfied with the status quo.
                        </p>
                    </span>
                </div>
            </section>
        </Parallax>
    )
}

export default image