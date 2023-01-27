import React from "react";
import { motion } from "framer-motion";

class ThankYou extends React.Component{
    render(){
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
                <section class="bg-coralBlue my-10 shadow-2xl flex-col mx-auto w-full md:w-1/2 rounded-lg">
                    <h2 class="lg:text-5xl p-4 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1"></h2>
                        <div class="flex flex-col bg-greenSea justify-center p-10">
                            <h1 className="text-silverGray text-2xl font-bold">Thank you! I will respond as soon as I can! I look forward to meeting you.</h1>
                        </div>
                </section>
            </motion.div>
        )
    }
}

export default ThankYou;