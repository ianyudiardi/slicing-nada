import Hero from "../components/blocks/Hero";
import Navbar from "../components/blocks/Navbar";
import { useState, useEffect } from "react";
export default function Home() {
    const [theme, setTheme] = useState('light');
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const toggleTheme = () => {
        setTheme(nextTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(nextTheme);
    }
    return (
        <>
            <section className={`h-screen object-cover ${nextTheme === 'light' ? 'bg-hero01' : 'bg-hero02'}`}>
                <div className="container flex justify-end">
                    <button onClick={toggleTheme} className="">
                        {nextTheme === 'light' ? <img src="\assets\LightDark\Property 1=light.png" alt="" /> : <img src="\assets\LightDark\Property 1=dark.png" alt="" />}
                    </button>
                </div>
                {/* <Navbar /> */}
                <Hero />
            </section>
        </>
    )
}