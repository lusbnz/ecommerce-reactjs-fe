import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assests/hero1.webp"
import hero2 from "../assests/hero2.webp"

const Hero = () => {
    return (
        <div className="p-8 min-h-[60vh] grid grid-cols-1 place-items-center lg:h-screen lg:grid-cols-2 gap-32">
            <article className="content text-center border rounded-lg py-8">
                <h1 className="lg:mb-8 font-bold text-[32px]">
                    Design your
                    <br />
                    comfort zone
                </h1>
                <p className="mb-8 mx-auto max-w-[80%] font-light text-[12px] lg:text-[14px] text-sec">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
                    sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
                    aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
                    alias?
                </p>
                <Link to='product' className=''>
                    Shop now
                </Link>
            </article>
            <article className="image block relative before:absolute before:w-[10%] before:h-[80%] before:bg-hvr before:bottom-0  before:left-[-8%] before:rounded-lg">
                <img src={hero1} alt="hero1" className="main w-full h-[50%] lg:h-[550px] relative rounded-lg object-cover block" />
                <img src={hero2} alt="hero2" className="accent absolute bottom-0 lg:bottom-10 left-32 lg:left-0 w-[50%] lg:w-[250px] -translate-x-[50%] rounded-lg" />
            </article>
        </div>
    )
}

export default Hero