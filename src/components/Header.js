import React from "react";
import { motion } from 'framer-motion';
import resume from '../Resume/resumeAlexM.pdf';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="w-full flex flex-row bg-greenSea h-20 items-center shadow-xl lg:text-3xl text-xs">
                    <ul className="absolute mx-10 decoration-4 text-silverGray hidden md:block"><a href="/">Alex</a></ul>
                    <ul class="w-full flex flex-row font-bold text-white justify-center">
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-2 lg:mx-8 sm:underline decoration-4 sm:underline-offset-8 text-silverGray"><motion.a
                        href="/aboutme">About Me</motion.a></motion.li>
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-2 lg:mx-8 md:underline decoration-4 underline-offset-8 text-silverGray"><a href="/projects">Projects</a></motion.li>
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-2 lg:mx-8 md:underline decoration-4 underline-offset-8 text-silverGray"><a href="/contactme">Contact Me</a></motion.li>
                        <motion.li 
                        whileHover={{scale: 1.1}}
                        transition={{type: 'spring', stiffness: 100, damping: 5}}
                        class="mx-2 lg:mx-8 md:underline decoration-4 underline-offset-8 text-silverGray"><a href={resume} download={resume}>Resume</a></motion.li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;