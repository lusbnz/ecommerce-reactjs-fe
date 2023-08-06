import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center text-center">
            <h1 className="font-bold text-[32px] text-pri">
                404
            </h1>
            <h3 className="font-normal text-[16px] text-drk">
                Sorry, the page you tried cannot be found
            </h3>
            <Link to='/' className="m-8">
                Back to home
            </Link>
        </div>
    )
}

export default Error