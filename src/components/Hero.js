import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "../assests/hero1.webp"
import Aos from "aos";
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="p-8 min-h-[60vh] grid grid-cols-1 place-items-center lg:h-screen lg:grid-cols-2 gap-32">
            <article className="content text-center border border-drk rounded-lg py-8">
                <h1 data-aos='fade-down' className="lg:mb-8 font-bold text-[32px]">
                    Design your
                    <br />
                    comfort zone
                </h1>
                <p data-aos='fade-right' className="mb-8 mx-auto max-w-[80%] font-semibold text-[12px] lg:text-[14px] text-pri">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                    sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                    aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                    alias?
                </p>
                <Link to='products'>
                    <button data-aos='fade-up' className="capitalize font-semibold text-drk bg-lgt hover:bg-pri hover:text-lgt rounded-lg border border-drk p-4">
                        Shop Now
                    </button>
                </Link>
            </article>
            <article className="image hidden md:block relative">
                <img src={hero1} data-aos='zoom-in' alt="hero1" className="main w-full h-full lg:h-[550px] relative rounded-lg object-cover block" />
            </article>
        </div>
    )
}

export default Hero