import React from "react";
import { motion } from "framer-motion";

class Home extends React.Component{
    render() {
        return (
        <div>
            <header class="flex w-full h-screen bg-gradient-to-r from from-blue-300 to-red-300 backdrop-blur justify-center items-center">
                <motion.div 
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.4,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                class="text-5xl text-white font-bold pb-40">Hi, <br />I'm Alexander.<br />I'm a Full Stack Developer.</motion.div>
            </header>
        </div>
        )
    }
}

export default Home;