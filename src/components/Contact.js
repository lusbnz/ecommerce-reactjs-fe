import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="py-20 px-8">
            <h3 data-aos='fade-down' className="text-drk font-semibold text-[24px]">Join our newsletter and get 20% off</h3>
            <div className="content md:grid md:grid-cols-2">
                <p data-aos='fade-right' className="text-pri font-semibold p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    sint unde quaerat ratione soluta veniam provident adipisci cumque
                    eveniet tempore?
                </p>
                <form data-aos='fade-left' className="contact w-auto max-w-[500px] grid grid-cols-2">
                    <input
                        type='email'
                        className='input border border-drk p-4 border-r-none text-sec rounded-l-lg placeholder:text-drk placeholder:capitalize'
                        placeholder='enter email'
                    />
                    <button type="submit" className="capitalize text-drk bg-pri hover:bg-lgt rounded-r-lg border border-drk p-4">
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact