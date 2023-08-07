import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { links } from "../utils/data"
import icon from "../utils/icon"
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import Aos from "aos";
import 'aos/dist/aos.css'

const { FaBars } = icon

const Navbar = () => {
    const [toggled, setToggled] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                <Menu>
                    {links.map((item) => (
                        <MenuItem key={item.id}>
                            <Link to={item.url}>
                                {item.text}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Sidebar>

            <div className="flex justify-between items-center p-4 h-20 shadow-lg">
                <Link to="/" data-aos='fade-right' className="font-bold text-[32px] text-pri">
                    Shoppii
                </Link>

                <ul className="gap-20 hidden lg:flex">
                    {links.map((item) => (
                        <li key={item.id} data-aos='fade-down' className="font-normal text-[16px] text-drk hover:text-hvr">
                            <Link to={item.url}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button data-aos='fade-left' className="cursor-pointer " onClick={() => setToggled(!toggled)}>
                    <FaBars size={20} className="lg:hidden" />
                </button>
            </div>
        </>
    )
}

export default Navbar