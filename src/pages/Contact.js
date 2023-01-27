import React from "react";
import { motion } from "framer-motion";

class Contact extends React.Component{
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
                    <h2 class="lg:text-5xl p-4 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1">Contact Me</h2>
                        <div class="flex flex-col bg-greenSea justify-center p-10">
                            <form action="https://formsubmit.co/alexmore080@gmail.com" method="POST">
                                <div class="w-full md:w-1/2 mx-auto">
                                    <label for="email" class="block text-2xl font-semibold">Email:</label>
                                    <input type="text" class="mt-2 block w-full" name="email" placeholder="example@mail.com" required/>
                                    <input type="hidden" name="_next" value="https://alexmreact.herokuapp.com/thanks" />
                                </div>
                                <div class="py-8 w-full md:w-1/2 mx-auto">
                                    <label for="post" class="form-label block font-semibold">Message:</label>
                                    <textarea type="text" class="mt-1 block w-full" name="message" placeholder="Type a Message..." required></textarea>
                                </div>
                                <div class="justify-center">
                                    <button type="submit" class="rounded-md bg-slate-300 p-2 drop-shadow-md justify-self-center">Send</button>
                                </div>
                            </form>
                        </div>
                </section>
            </motion.div>
        )
    }
}

export default Contact;