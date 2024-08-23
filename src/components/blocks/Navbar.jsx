export default function Navbar(){
    return(
        <>
        <nav className="relative bg-red-950 h-20 z-10">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="text-white font-bold text-lg">Logo</div>
                <ul className="flex">
                    <li className="text-white font-bold mx-2">Home</li>
                    <li className="text-white font-bold mx-2">About</li>
                    <li className="text-white font-bold mx-2">Contact</li>
                </ul>
            </div>
        </nav>
        </>
    )
}