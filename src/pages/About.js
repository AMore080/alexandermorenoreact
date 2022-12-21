import React from "react";

class About extends React.Component{
    render() {
        return (
            <div>
                <section class="container-lg bg-blue-400 my-20 shadow-2xl">
                    <h2 class="text-5xl text-white p-8 border-solid border-4 border-slate-500 font-bold mx-1 shadow-2xl">About Me</h2>
                        <div class="grid bg-slate-100 flex-row">
                            <img src="https://res.cloudinary.com/davvalvhs/image/upload/v1671587308/image0_4_fps5u2.jpg" alt="a picture of me" class="scale-50 rounded-md z-0 col-span-1" />
                                <h1 class="col-span-2 col-start-2 py-24 font-semibold mr-3 lg:text-3xl">I'm Alexander (or Alex for short), I am a learning developer looking pursue a career as a software engineer. I am
                                a current
                                student in the Lonestar College system looking to major in Computer Science and am also enrolled in the
                                University of Minnesota Bootcamp
                                as a means of gaining experience for my future career as a software engineer. I have ample experience with
                                computers as I've worked with them for as long as I can remember. I chose Computer Science because I love to keep learning
                                new topics and programming is constantly changing. 
                                <br />
                                <br />
                                <br />
                                <br />
                                When I am not coding, I am usually catching up on my favorite games and tv shows! I also love to travel and try new foods. 
                                </h1>
                        </div>
                </section>
            </div>
        )
    }
}

export default About;