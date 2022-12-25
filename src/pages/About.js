import React from "react";

class About extends React.Component{
    render() {
        return (
            <div>
                <section class=" bg-coralBlue my-10 shadow-2xl flex-col mx-auto w-full md:w-3/4 rounded-lg">
                    <h2 class="lg:text-5xl p-4 font-bold mx-1 shadow-3xl z-20 text-silverGray flex-1">About Me</h2>
                        <div class="md:grid flex-row bg-greenSea items-center rounded-b-lg">
                            <img src="https://res.cloudinary.com/davvalvhs/image/upload/v1671587308/image0_4_fps5u2.jpg" alt="a picture of me" class="scale-75 rounded-md z-0 col-span-auto float-left" />
                                <h1 class="col-span-2 col-start-2 lg:py-28 font-semibold text-silverGray mr-3 sm:text-xs md:text-lg lg:text-2xl p-20">I'm Alexander (or Alex for short), I am a learning developer looking pursue a career as a software engineer. I am
                                a current
                                student in the Lonestar College system looking to major in Computer Science and am also enrolled in the
                                University of Minnesota Bootcamp
                                as a means of gaining experience for my future career as a software engineer. I have ample experience with
                                computers as I've worked with them for as long as I can remember. I plan to continue expanding my skillset and further develop my creativity.
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