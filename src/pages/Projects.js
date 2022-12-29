import React from "react";
import { motion } from "framer-motion";

class Projects extends React.Component{
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
                <section class=" bg-coralBlue my-10 shadow-2xl flex-col mx-auto w-full md:w-3/4 rounded-lg">
                <h2 class="lg:text-5xl p-2 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1">Projects</h2>
                    <div class="flex-row bg-greenSea rounded-b-lg
                    grid grid-cols-12 grid-rows-4 md:grid-rows-2 min-h-48r gap-2 my-5 h-48r p-5">
                        <a href="https://codemovie.herokuapp.com/" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://res.cloudinary.com/davvalvhs/image/upload/v1671583717/clapperboard-blue-neon-icon-simple-thin-line-outline-vector-cinema-icons-ui-ux-website-mobile-application-dark-164875409_glhqbo.jpg')]"
                            >
                            <button class="m-2">Codemovie!</button>
                        </a>
                        <button class="projectbutt row-start-auto col-start-auto md:col-span-3 text-3xl font-bold border-2 border-slate-50 shadow-xl  text-silverGray
                        bg-cover bg-[url('https://images.unsplash.com/photo-1631010231931-d2c396b444ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
                        <a href="https://github.com/AMore080/E-Commerce-Backend">E-Commerce Backend</a></button>
                        <button class="projectbutt col-start-auto md:col-span-3 text-3xl font-bold border-2 border-slate-50 shadow-xl   text-white
                        bg-cover bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://github.com/AMore080/TeamProfileGenerator">
                            Team Profile Generator</a></button>
                        <button class="projectbutt col-start-auto md:col-span-3 text-3xl font-bold border-2 border-slate-50 shadow-xl  text-white
                        bg-cover bg-[url('https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')]"><a href="https://techblog12121.herokuapp.com/">
                            Tech Blog</a></button>
                        <button class="projectbutt row-start-auto col-start-auto md:col-span-3 font-bold text-2xl text-white shadow-xl border-2 border-slate-50
                        bg-cover bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://amore080.github.io/MarvelQuoteGenerator/">
                            Marvel Quote Generator</a>
                        </button>
                        <button class="projectbutt row-start-auto col-start-auto md:col-span-3 font-bold text-2xl text-white shadow-xl border-2 border-slate-50
                        bg-cover bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://amore080.github.io/MarvelQuoteGenerator/">
                            Adoption Admin Portal</a>
                        </button>
                        <button class="projectbutt row-start-auto col-start-auto col-span-3 font-bold text-2xl text-white shadow-xl border-2 border-slate-50
                        bg-cover bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://amore080.github.io/MarvelQuoteGenerator/">
                            PWA Text Editor</a>
                        </button>
                        <button class="projectbutt row-start-auto col-start-auto col-span-3 font-bold text-2xl text-white shadow-xl border-2 border-slate-50
                        bg-cover bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://amore080.github.io/MarvelQuoteGenerator/">
                            Weather App</a>
                        </button>   
                    </div>
                </section>
            </motion.div>
        )
    }
}

export default Projects;