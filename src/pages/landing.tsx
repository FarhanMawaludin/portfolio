import BorderGlow from "@/components/BorderGlow";
import Navbar from "@/components/navbar";
import LogoLoop from "@/components/reactbits/animate/logo-loop";
// import ShapeGrid from "@/components/reactbits/bg/shape-grid";
import CardSwap, { Card } from "@/components/reactbits/card-swap";
import MagicBento from "@/components/reactbits/component/magicbento";
import RotatingText from "@/components/reactbits/text/rotating-text";
import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiLaravel,
    SiFastapi,
    SiPython,
    SiFlutter,
    SiMysql,
    SiPostgresql,
} from "react-icons/si";
import { Envelope, WhatsappLogo, GithubLogo, ArrowRight } from "phosphor-react";
import Footer from "@/components/footer";

export default function LandingPage() {

    const techLogos = [
        { node: <SiReact />, title: "React", href: "#" },
        { node: <SiTypescript />, title: "TypeScript", href: "#" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "#" },
        { node: <SiBootstrap />, title: "Bootstrap", href: "#" },
        { node: <SiLaravel />, title: "Laravel", href: "#" },
        { node: <SiFastapi />, title: "FastAPI", href: "#" },
        { node: <SiPython />, title: "Python", href: "#" },
        { node: <SiFlutter />, title: "Flutter", href: "#" },
        { node: <SiMysql />, title: "MySQL", href: "#" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "#" },
    ];

    const commonGlowProps = {
        edgeSensitivity: 30,
        glowColor: "40 80 80",
        backgroundColor: "#060010",
        borderRadius: 28,
        glowRadius: 40,
        glowIntensity: 1,
        coneSpread: 25,
        animated: false,
        colors: ['#c084fc', '#f472b6', '#38bdf8']
    };

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Navbar />

            <main>

                {/* ABOUT */}
                <section
                    id="about"
                    className="min-h-screen flex items-center scroll-mt-24 py-16"
                >
                    <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">

                        {/* Avatar */}
                        <div className="mb-6">
                            <img
                                src="/background.png"
                                alt="avatar"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-zinc-200">

                            <span className="block mb-2">
                                Hi I’m <span className="text-white">Farhan</span>,
                            </span>

                            <span className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                                <RotatingText
                                    texts={["Fullstack Web", "UI/UX Design", "Mobile"]}
                                    mainClassName="inline-flex overflow-hidden py-1 md:py-2 "
                                    staggerFrom="last"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                                <span>Developer</span>
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed px-2">
                            I build real-world web applications that solve problems and deliver value.
                            With experience in fullstack development, I focus on creating scalable systems,
                            intuitive user interfaces, and seamless integrations. I enjoy turning ideas into
                            reliable products while continuously improving my skills and adapting to new technologies.
                        </p>

                        {/* Button */}
                        <div className="mt-8">
                            <button
                                onClick={() =>
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="px-5 md:px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition flex items-center gap-2 text-sm md:text-base"
                            >
                                Get in touch
                                <ArrowRight size={18} weight="bold" />
                            </button>
                        </div>

                    </div>
                </section>

                <section className="flex items-center scroll-mt-24 py-12 md:py-16">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center px-4">

                        <BorderGlow {...commonGlowProps}>
                            <div className="p-6 md:p-8 flex flex-col items-center justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">5+</h3>
                                <p className="text-zinc-400 text-xs md:text-sm mt-2">Projects Built</p>
                            </div>
                        </BorderGlow>

                        <BorderGlow {...commonGlowProps}>
                            <div className="p-6 md:p-8 flex flex-col items-center justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">3+</h3>
                                <p className="text-zinc-400 text-xs md:text-sm mt-2">Technologies Mastered</p>
                            </div>
                        </BorderGlow>

                        <BorderGlow {...commonGlowProps}>
                            <div className="p-6 md:p-8 flex flex-col items-center justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">100%</h3>
                                <p className="text-zinc-400 text-xs md:text-sm mt-2">Commitment</p>
                            </div>
                        </BorderGlow>

                        <BorderGlow {...commonGlowProps}>
                            <div className="p-6 md:p-8 flex flex-col items-center justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">∞</h3>
                                <p className="text-zinc-400 text-xs md:text-sm mt-2">Learning Mindset</p>
                            </div>
                        </BorderGlow>

                    </div>
                </section>

                <section
                    id="what-i-can-offer"
                    className="min-h-screen flex items-center scroll-mt-24 py-16"
                >
                    <div className="flex flex-col items-center justify-center gap-4 px-4">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-3xl md:text-4xl font-semibold text-center">
                                What I Can Offer
                            </h2>
                            <p className="leading-relaxed text-base md:text-lg w-full md:w-[60%] text-center">
                                I am a student with hands-on experience in end-to-end web development and design systems. From crafting intuitive user interfaces to building reliable backend integrations, I focus on delivering complete, user-friendly solutions.
                            </p>
                        </div>

                        <MagicBento
                            textAutoHide={true}
                            enableStars
                            enableSpotlight
                            enableBorderGlow={true}
                            enableTilt
                            enableMagnetism={false}
                            clickEffect
                            spotlightRadius={170}
                            particleCount={12}
                            glowColor="132, 0, 255"
                            disableAnimations={false}
                        />
                    </div>
                </section>

                {/* PROJECTS */}
                <section
                    id="projects"
                    className="min-h-screen flex items-start md:items-center scroll-mt-24 py-16"
                >
                    <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Featured <span className="text-white">Projects</span>
                            </h2>

                            <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                                Here are some projects I've worked on. These include web
                                applications, UI/UX designs, and experiments with modern
                                technologies.
                            </p>

                            <button className="px-5 md:px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition flex items-center gap-2 group text-sm md:text-base mx-auto md:mx-0">
                                View all projects
                                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        <div className="flex justify-center mt-10 md:mt-0">
                            <div className="scale-90 md:scale-100 origin-top translate-y-10 sm:translate-y-10 md:translate-y-0">
                                <CardSwap
                                    width={320}
                                    height={280}
                                    cardDistance={50}
                                    verticalDistance={60}
                                    delay={5000}
                                    pauseOnHover={true}
                                >
                                    <Card className="cursor-pointer overflow-hidden" onClick={() => window.open("#")}>
                                        <img src="/project-1.jpg" className="w-full h-40 object-cover rounded-t-xl block" />
                                        <div className="p-4">
                                            <h3 className="font-semibold">POS System</h3>
                                            <p className="text-sm text-zinc-400">
                                                Multi-store POS built with React & FastAPI
                                            </p>
                                        </div>
                                    </Card>

                                    <Card className="cursor-pointer overflow-hidden" onClick={() => window.open("#")}>
                                        <img src="/project-2.jpg" className="w-full h-40 object-cover rounded-t-xl block" />
                                        <div className="p-4">
                                            <h3 className="font-semibold">Portfolio Website</h3>
                                            <p className="text-sm text-zinc-400">
                                                Personal portfolio with modern UI animation
                                            </p>
                                        </div>
                                    </Card>

                                    <Card className="cursor-pointer overflow-hidden flex flex-col" onClick={() => window.open("#")}>
                                        <img src="/project-3.jpg" className="w-full h-40 object-cover rounded-t-xl block" />
                                        <div className="p-4">
                                            <h3 className="font-semibold">Mobile App UI</h3>
                                            <p className="text-sm text-zinc-400">
                                                Clean mobile UI design for productivity apps
                                            </p>
                                        </div>
                                    </Card>
                                </CardSwap>
                            </div>
                        </div>

                    </div>
                </section>

                <section
                    id="contact"
                    className="flex items-center justify-center py-16 mt-12 mb-12 scroll-mt-24"
                >
                    <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Let’s Work Together
                        </h2>

                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                            I’m open to new opportunities, collaborations, or just a friendly chat.
                            If you have a project in mind or want to work together, feel free to reach out.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">

                            <button
                                onClick={() => window.open("mailto:farhanmawaludin02@@gmail.com")}
                                className="flex items-center gap-2 px-5 md:px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition group text-sm md:text-base"
                            >
                                <Envelope size={20} weight="bold" className="transition-transform group-hover:-translate-y-0.5" />
                                Email Me
                                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => window.open("https://wa.me/+6281511424734")}
                                className="flex items-center gap-2 px-5 md:px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition group text-sm md:text-base"
                            >
                                <WhatsappLogo size={20} weight="bold" className="transition-transform group-hover:-translate-y-0.5" />
                                WhatsApp
                                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => window.open("https://github.com/farhanmawaludin")}
                                className="flex items-center gap-2 px-5 md:px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition group text-sm md:text-base"
                            >
                                <GithubLogo size={20} weight="bold" className="transition-transform group-hover:-translate-y-0.5" />
                                GitHub
                                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
                            </button>

                        </div>

                    </div>
                </section>

                <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={50}
                    gap={40}
                    hoverSpeed={0}
                    fadeOut
                />

                <Footer />

            </main>
        </div>
    );
}