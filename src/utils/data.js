import React from "react"
import icon from "./icon"

const { PiCompassLight, PiDiamondLight, PiNote } = icon

export const links = [
    {
        id: 1,
        text: 'Home',
        url: '/',
    },
    {
        id: 2,
        text: 'About',
        url: '/about',
    },
    {
        id: 3,
        text: 'Products',
        url: '/products',
    },
]

export const services = [
    {
        id: 1,
        icon: <PiCompassLight size={20}/>,
        title: 'mission',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: 2,
        icon: <PiDiamondLight size={20}/>,
        title: 'vision',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: 3,
        icon: <PiNote size={20}/>,
        title: 'history',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
]

export const product_url = 'https://course-api.com/react-store-products'
export const single_product_url = `https://course-api.com/react-store-single-product?id=`