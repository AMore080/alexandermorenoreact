import React from "react";

class Projects extends React.Component{
    render(){
        return (
            <div>
                <section class="my-20">
                    <h2 class="text-5xl text-white p-8 border-solid border-4 border-slate-50 font-bold mx-1 shadow-2xl  bg-blue-400"
                        id="container2">Projects</h2>
                    <div class="grid grid-cols-10 grid-rows-2 h-96 w-full m-3 gap-5 my-20 ">
                        <a href="https://codemovie.herokuapp.com/" class="row-span-2 col-span-3 col-start-2 text-3xl border-2 border-slate-50 shadow-xl
                        font-bold bg-cover text-white bg-[url('https://res.cloudinary.com/davvalvhs/image/upload/v1671583717/clapperboard-blue-neon-icon-simple-thin-line-outline-vector-cinema-icons-ui-ux-website-mobile-application-dark-164875409_glhqbo.jpg')]"
                            >
                            <button class="m-2">Codemovie!</button>
                        </a>
                        <button class="projectbutt col-start-5 col-span-2 m-2 text-3xl font-bold border-2 border-slate-50 shadow-xl  text-white
                        bg-cover bg-[url('https://images.unsplash.com/photo-1631010231931-d2c396b444ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
                        <a href="https://github.com/AMore080/E-Commerce-Backend">E-Commerce Backend</a></button>
                        <button class="projectbutt col-start-5 col-span-2 m-2  text-3xl font-bold border-2 border-slate-50 shadow-xl   text-white
                        bg-cover bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://github.com/AMore080/TeamProfileGenerator">Team Profile Generator</a></button>
                        <button class="projectbutt col-start-7 col-span-2 m-2  text-3xl font-bold border-2 border-slate-50 shadow-xl  text-white
                        bg-cover bg-[url('https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')]"><a href="https://techblog12121.herokuapp.com/">Tech Blog</a></button>
                        <button class="projectbutt row-start-1 col-start-7 m-2 col-span-2 font-bold text-2xl text-white shadow-xl border-2 border-slate-50
                        bg-cover bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"><a href="https://amore080.github.io/MarvelQuoteGenerator/">Marvel Quote Generator</a></button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects;