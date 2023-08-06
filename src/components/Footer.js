import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col gap-1 lg:flex-row h-20 justify-center items-center icon bg-drk text-center">
            <span className="font-light text-[12px] text-sec">
                &copy; {new Date().getFullYear()}
                <tab/>
                <span className="font-bold text-pri"> Quoc Viet </span>
            </span>
            
            <span className="font-light text-[12px] text-sec">
                All rights reserved
            </span>
        </div>
    )
}

export default Footer