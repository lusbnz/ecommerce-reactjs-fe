import React, { useEffect } from "react";
import {services} from "../utils/data"
import Aos from "aos";
import 'aos/dist/aos.css'

const Services = ()=> {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="py-20 bg-sec">
            <article data-aos='fade-down' className="header text-center lg:grid lg:grid-cols-1">
                <h3 className="mb-8 font-semibold text-[32px] text-lgt">
                Custom furniture <br /> Built only for you
                </h3>
                <p className="font-light text-[12px] md:text-[16px] mb-0 text-drk">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
                </p>
            </article>
            <div className="services mt-16 px-12 grid gap-10 md:grid-cols-3">
                {services.map((item)=>(
                    <article data-aos='zoom-in' className="service bg-hvr rounded-lg text-center p-8" key={item.id}>
                        <span className="icon mx-auto place-items-center grid mb-4 rounded-full text-lgt">{item.icon}</span>
                        <h4 className="font-semibold text-[20px] text-drk">{item.title}</h4>
                        <p className="font-light text-[14px] mb-0 text-sec">{item.text}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Services