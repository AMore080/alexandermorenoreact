import React from "react";

class Contact extends React.Component{
    render(){
        return (
            <div>
                <section class="container-lg  bg-slate-100 my-10 shadow-xl">
                    <h2 class="text-5xl text-white p-4 my-20 border-solid border-4 border-slate-50 font-bold mx-1 shadow-2xl  bg-blue-400">Contact Me</h2>
                    <div class="flex h-96 place-content-center my-8 bg-slate-100">
                        <form class="new-post-form bg-slate-100">
                            <div>
                                <label for="title" class="block text-2xl font-semibold">Email:</label>
                                <input type="text" class="mt-2 block w-full" id="title" />
                            </div>
                            <div class="py-8">
                                <label for="post" class="form-label block font-semibold">Message:</label>
                                <textarea type="text" class="mt-1 block w-full" id="post" placeholder="Type a Message..."></textarea>
                            </div>
                            <div>
                                <button type="submit" id='post-button' class="rounded-md bg-slate-300 p-2 drop-shadow-md justify-self-center">Send</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;