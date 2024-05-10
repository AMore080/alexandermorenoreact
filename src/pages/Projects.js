import React from "react";
import { motion } from "framer-motion";
import '../index.css'
import FlippableCard from "../components/Flip-Card";

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
                <section class="bg-deepSeaBlack my-10 shadow-2xl flex-col mx-auto w-full md:w-3/4 rounded-lg">
                <h2 class="lg:text-5xl p-2 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1">Projects</h2>
                    <div class="flex-row bg-greenSea rounded-b-lg
                    grid lg:grid-cols-3 grid-cols-1 grid-rows-6 md:grid-rows-2 gap-2 my-5 p-5">
                        <FlippableCard 
                        backgroundImage={'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
                        projectTitle={"CodeMovie!"}
                        description={
                            "CodeMovie! is a website where users can go to find their favorite movies. Once logged in, they can search by title for a movie or do a random discover; and then add it to their rental cart or watchlist. Most notable tech being Webpack, Babel, GraphQL, & JWT"
                        }
                        liveDemoLink={"https://codemovie.herokuapp.com/"}
                        gitHubLink={"https://github.com/AMore080/ecommerce"}
                        />
                        <FlippableCard 
                        backgroundImage={'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}
                        projectTitle={"Pokedex"}
                        description={"React application using PokeAPI, GraphQL/ApolloQL, & MongoDB."}
                        liveDemoLink={"https://pokedexspin.herokuapp.com/"}
                        gitHubLink={"https://github.com/AMore080/Pokedex"}
                        />
                        <FlippableCard 
                        backgroundImage={'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
                        projectTitle={"Team Profile Generator"}
                        description={`
                        A team profile builder that takes in information about teammates based on user-input and generates an HTML page displaying the info.
                        Makes use of JEST for tests and Inquirer for command line entries`
                        }
                        liveDemoLink={"https://github.com/AMore080/TeamProfileGenerator"}
                        gitHubLink={"https://github.com/AMore080/TeamProfileGenerator"}
                        />
                        <FlippableCard 
                        backgroundImage={'https://images.unsplash.com/photo-1631010231931-d2c396b444ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
                        projectTitle={"E-Commerce Backend"}
                        description={"An E-Commerce Backend proof of concept displaying a database using MySql to complete Create, Read, Update, and Delete routes. Recommend using Insomnia to view functionality"}
                        liveDemoLink={"https://github.com/AMore080/E-Commerce-Backend"}
                        gitHubLink={"https://github.com/AMore080/E-Commerce-Backend"}
                        />
                        <FlippableCard 
                        backgroundImage={'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}
                        projectTitle={"Tech Blog"}
                        description={"A tech blog website where a user can post their thoughts on current technology. Uses MySQL and follows the MVC framework with Handlebars"}
                        liveDemoLink={"https://techblog12121.herokuapp.com/"}
                        gitHubLink={"https://github.com/AMore080/TechBlogger"}
                        />
                        <FlippableCard 
                        backgroundImage={'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}
                        projectTitle={"AdoptMe!"}
                        description={"An adoption site meant for admins of a dog shelter. Uses NodeJS, Express, Handlebars, MySQL, and Sequelize."}
                        liveDemoLink={"https://adoptmee.herokuapp.com/"}
                        gitHubLink={"https://github.com/AMore080/AdoptMee"}
                        />
                        {/* <FlippableCard/>
                        <FlippableCard/>
                        <FlippableCard/>
                        <FlippableCard/>
                        <FlippableCard/> */}
                        {/* <div class="card col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                            font-bold bg-cover text-white bg-[url('https://res.cloudinary.com/davvalvhs/image/upload/v1671583717/clapperboard-blue-neon-icon-simple-thin-line-outline-vector-cinema-icons-ui-ux-website-mobile-application-dark-164875409_glhqbo.jpg')]">
                           <div class="card__inner">
                             <div class="card__face card__face--front">    
                                <a href="https://codemovie.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button class="m-2">Codemovie!</button>
                                </a>
                             </div>
                             <div class="card__face card__face--back">
                                <div class="card__content">
                                  <div class="card__header">
                                    <h2>Apple</h2>
                                  </div>
                                  <div class="card__body">
                                    <h3>This is a Project</h3>
                                  </div>  
                                </div>
                             </div>
                            </div>
                        </div> */}
                        {/* <a href="https://github.com/AMore080/E-Commerce-Backend" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1631010231931-d2c396b444ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"
                            >
                            <button class="m-2">E-Commerce Backend</button>
                        </a>
                        <a href="https://github.com/AMore080/TeamProfileGenerator" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"
                            >
                            <button class="m-2">Team Profile Generator</button>
                        </a>
                        <a href="https://techblog12121.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')]"
                            >
                            <button class="m-2">Tech Blog</button>
                        </a>
                        <a href="https://pokedexspin.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]"
                            >
                            <button class="m-2">Pokedex</button>
                        </a>
                        <a href="https://techblog12121.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]"
                            >
                            <button class="m-2">Adoption Admin Portal</button>
                        </a>
                        <a href="https://limitless-hollows-27046.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
                            >
                            <button class="m-2">PWA Text Editor</button>
                        </a>
                        <a href="https://amore080.github.io/WeatherDash/" target="_blank" rel="noopener noreferrer" class="col-span-3 col-start-auto text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80')]"
                            >
                            <button class="m-2">Weather App</button>
                        </a> */}
                    </div>
                </section>
            </motion.div>
        )
    }
}

export default Projects;