import { useState } from "react"

export default function Button(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    if (props.type === 'webdev') {
        return (
            <button className="">
                <img src={isHovered ? '/assets/buttons/webdevhover.png' : '/assets/buttons/webdev.png'} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </button>
        )
    } else if (props.type === 'illust') {
        return (
            <button className="">
                <img src={isHovered ? '/assets/buttons/illusthover.png' : '/assets/buttons/illust.png'} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </button>
        )
    }
}