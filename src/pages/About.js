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
<<<<<<< HEAD
                <section class=" bg-deepSeaBlack my-10 shadow-2xl flex-col mx-auto w-full md:w-3/4 rounded-lg">
                    <h2 class="lg:text-5xl p-4 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1">About Me</h2>
                        <div class="sm:grid flex-row bg-greenSea items-center rounded-b-lg">
                            <img src="https://res.cloudinary.com/davvalvhs/image/upload/v1671587308/image0_4_fps5u2.jpg" alt="a picture of me" class="sm:row-auto lg:scale-75 scale-75 rounded-md z-0 col-span-auto float-left p-5" />
                                <div class="col-span-2 col-start-2 lg:py-28 font-semibold text-silverGray sm:text-xs md:text-lg lg:text-2xl md:p-15 p-5">
                                    <h1 className="bg-deepSeaBlack mx-5 p-5 rounded-lg">I'm Alexander (or Alex for short), I am a Computer Science student. I have 
                                    earned my certificate in fullstack web development through the University Of Minesota's bootcamp. I am currently attending the University of Houston
                                    to complete my Bachelor of Science in Computer Science.
=======
                <section class=" bg-deepSeaBlack my-10 shadow-2xl mx-auto w-full box-content md:w-3/4 rounded-lg">
                    <h2 class="lg:text-5xl p-4 font-bold mx-1 z-20 text-silverGray flex-1">About Me</h2>
                        <div className="sm:grid bg-greenSea rounded-b-lg flex flex-col flex-wrap">
                                <div className="lg:pb-10 font-semibold text-silverGray md:p-15 p-5 flex-auto">
                                    <p className="bg-deepSeaBlack mx-5 p-5 rounded-lg shrink lg:text-2xl border-white border-2">
                                        <img src="https://res.cloudinary.com/davvalvhs/image/upload/v1671587308/image0_4_fps5u2.jpg" 
                                        alt="myself in a red flannel" 
                                        className="lg:scale-75 sm:scale-[.20] max-h-72 mx-auto shrink center border-white border-2 rounded-b-full rounded-t-full"/>
                                    I'm Alexander (or Alex), I am a Computer Science student. I have 
                                    earned my certificate in fullstack web development through the University Of Minesota's coding bootcamp. I am enrolled at Lone Star College and will transfer to the University of Houston
                                    to complete my Bachelors of Science in Computer Science.
>>>>>>> 2c9a9503ee5a813e994ac33bf1abb9226a986355
                                    I plan to continue expanding my skillset and work with a team that I can grow with.
                                    <br />
                                    <br />
                                    When I am not working or programming, I am usually catching up on my favorite games and tv shows! I also love to travel and try new foods.
                                    <br />
                                    <br />
                                    Check out my resume for more about my professional experience!
                                    </p>
                                </div>
                        </div>  
                </section>
            </motion.div>
        )
    }
}

export default About;