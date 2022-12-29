import React from "react";
import { motion } from 'framer-motion';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="w-full flex flex-row bg-coralBlue h-20 items-center sticky top-0 shadow-xl lg:text-3xl sm:text-xs z-20">
                    <ul className="absolute mx-10 decoration-4 text-silverGray"><a href="/">Alex</a></ul>
                    <ul class="w-full flex flex-row font-bold text-white justify-center">
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-4 lg:mx-8 underline decoration-4 underline-offset-8 text-silverGray"><motion.a
                        href="/aboutme">About Me</motion.a></motion.li>
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-4 lg:mx-8 underline decoration-4 underline-offset-8 text-silverGray"><a href="/projects">Projects</a></motion.li>
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-4 lg:mx-8 underline decoration-4 underline-offset-8 text-silverGray"><a href="/contactme">Contact Me</a></motion.li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;