import React from "react";
import { PageHero } from "../components"
import aboutImg from "../assests/about.webp"

const About = () => {
    return (
        <div>
            <PageHero title='About'/>
            <div className="grid gap-16 p-8 place-items-center grid-cols-1">
                <img src={aboutImg} alt="about" className="w-[80%] h-[500px] block object-cover rounded-lg"/>
                <article className="flex flex-col items-center">
                    <h2 className="text-center font-semibold text-[24px] text-pri">
                        Our Story
                    </h2>
                    <p className="mt-8 mx-auto w-[80%] lg:max-w-[60%] font-light text-[16px] text-drk">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                        accusantium sapiente tempora sed dolore esse deserunt eaque
                        excepturi, delectus error accusamus vel eligendi, omnis beatae.
                        Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                        dolore, obcaecati incidunt sequi blanditiis est exercitationem
                        molestiae delectus saepe odio eligendi modi porro eaque in libero
                        minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                        ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                        similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                        iste.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default About