import React from "react";

class Home extends React.Component{
    render() {
        return (
        <div>
            <header class="flex w-full h-screen bg-gradient-to-r from from-blue-300 to-red-300 backdrop-blur justify-center items-center">
                <h1 class="text-5xl text-white font-bold pb-40">Hi, <br />I'm Alexander.<br />I'm a Full Stack Developer.</h1>
            </header>
        </div>
        )
    }
}

export default Home;