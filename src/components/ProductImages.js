import React, { useState } from "react";

const ProductImages = ({ images = [[]] }) => {
    const [main, setMain] = useState(images[0])
    return (
        <div className="h-full grid place-items-center">
            <img src={main.url} alt="product" className="main h-[500px] w-[500px] object-cover rounded-lg block" />
            <div className="gallery mt-4 grid grid-cols-5 gap-1 lg:gap-4 mx-auto w-full lg:w-[80%]">
                {images.map((image, index) => {
                    return (
                        <img
                            src={image.url}
                            alt="gallery"
                            key={index}
                            className={`${image.url === main.url ? 'active h-[80px] lg:h-[100px] cursor-pointer' : 'h-[80px] lg:h-[100px] cursor-pointer'}`}
                            onClick={() => setMain(images[index])}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImages