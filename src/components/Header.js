import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="w-full flex flex-row bg-blue-500 h-20 items-center sticky top-0 shadow-xl lg:text-3xl md:text-xs z-20">
                    <ul class="w-full flex flex-row font-bold text-white justify-center">
                        <li class="mx-8 underline decoration-4 underline-offset-8"><a href="/aboutme">About Me</a></li>
                        <li class="mx-8 underline decoration-4 underline-offset-8"><a href="/projects">Projects</a></li>
                        <li class="mx-8 underline decoration-4 underline-offset-8"><a href="/contactme">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;