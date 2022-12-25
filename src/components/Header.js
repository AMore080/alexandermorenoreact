import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="w-full flex flex-row bg-coralBlue h-20 items-center sticky top-0 shadow-xl lg:text-3xl sm:text-xs z-20">
                    <ul className="absolute mx-10 decoration-4 text-silverGray"><a href="/">Alex</a></ul>
                    <ul class="w-full flex flex-row font-bold text-white justify-center">
                        <li class="mx-4 lg:mx-8 underline decoration-4 underline-offset-8 text-silverGray"><a href="/aboutme">About Me</a></li>
                        <li class="mx-4 lg:mx-8 underline decoration-4 underline-offset-8 text-silverGray"><a href="/projects">Projects</a></li>
                        <li class="mx-4 lg:mx-8 underline decoration-4 underline-offset-8 text-silverGray"><a href="/contactme">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;