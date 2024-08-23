import { useState } from "react"
export default function ToggleLang() {
    const [lang, setLang] = useState('en');
    const nextLang = lang === 'en' ? 'kr' : 'en';
    const toggleLang = () => {
        setLang(nextLang);
        document.documentElement.classList.remove(lang);
        document.documentElement.classList.add(nextLang);
    }
    return (
        <>
            <button onClick={toggleLang}>
                {nextLang === 'en' ? <img src="public\assets\LightDark\Property 1=light.png" alt="" /> : <img src="public\assets\LightDark\Property 1=dark.png" alt="" />}
            </button>
        </>
    )
}