import React from "react";
import { motion } from 'framer-motion';


class About extends React.Component{
    render() {
        return (
            <motion.div
            initial={{opacity: 0, scale: 0.1}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                default: {
                    duration: 0.5,
                    ease: [0, .5, .2 , 1.01]
                },
            scale: {
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
            }
            }}
            >
                <section class=" bg-deepSeaBlack my-10 shadow-2xl flex-col mx-auto w-full md:w-3/4 rounded-lg">
                    <h2 class="lg:text-5xl p-4 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1">About Me</h2>
                        <div class="sm:grid flex-row bg-greenSea items-center rounded-b-lg">
                            <img src="https://res.cloudinary.com/davvalvhs/image/upload/v1671587308/image0_4_fps5u2.jpg" alt="a picture of me" class="scale-75 rounded-md z-0 col-span-auto float-left" />
                                <h1 class="col-span-2 col-start-2 lg:py-28 font-semibold text-silverGray mr-3 sm:text-xs md:text-lg lg:text-2xl md:p-20 p-5">I'm Alexander (or Alex for short), I am a fullstack web developer looking to pursue a career as a software engineer. I have 
                                earned my certificate in fullstack web development through the University Of Minesota's bootcamp. I am
                                also a current
                                student in the Lonestar College system majoring in Computer Science. I plan to continue expanding my skillset and work with a team that I can grow with.
                                <br />
                                <br />
                                When I am not coding, I am usually catching up on my favorite games and tv shows! I also love to travel and try new foods.
                                <br />
                                Check out my Resume for more about my professional experience!
                                </h1>
                        </div>
                </section>
            </motion.div>
        )
    }
}

export default About;