import Button from "../ui/Button"
export default function Hero() {
    return (
        <>
            <main className="container h-screen">
                <section className="grid grid-cols-2">
                    <div className="relative">
                        <img src="/assets/circles/Property 1=Variant2.png" alt="" className="animate-spin-slow absolute left-0 bottom-52" />
                        <img src="/assets/01.png" alt="" className="absolute bottom-96 left-32" />
                    </div>
                    <div className="">
                        <div className="flex justify-end gap-2">
                        </div>
                        <img src="..\src\assets\MEPHISTO.png" alt="" className="" />
                        <p className="text-white text-right ">Welcome to my portfolio! I'm NA ARTA, a professional in web, art and programming. Here you can find my best work, latest projects and useful tutorials. My specialities include network infrastructure and security, concept art, micro-animation, character design as well as web application development and JavaScript animation. There is always something new in the Recent Projects section. If interested in collaborating or discussing further, please feel free to contact me via the contact page. Happy exploring!</p>
                        <div className="flex justify-end gap-2">
                            <Button type="webdev" />
                            <Button type="illust" />
                        </div >
                    </div>
                </section>
            </main>
        </>
    )
}