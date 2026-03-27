import { ArrowUp } from "phosphor-react";
import BorderGlow from "@/components/BorderGlow";

export default function Footer() {
    const commonGlowProps = {
        edgeSensitivity: 20,
        glowColor: "40 80 80",
        backgroundColor: "#060010",
        borderRadius: 20,
        glowRadius: 30,
        glowIntensity: 0.8,
        coneSpread: 20,
        animated: true,
        colors: ['#c084fc', '#f472b6', '#38bdf8']
    };

    return (
        <footer className="bg-black text-white relative overflow-hidden py-12 md:py-16">
            {/* Glow Background */}
            <BorderGlow {...commonGlowProps} className="absolute inset-0 -z-10" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-5 md:gap-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm text-zinc-400 items-center">
                    {/* Teks kiri */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold mb-2">LET’S WORK TOGETHER</h3>
                    </div>

                    {/* Button kanan */}
                    <div className="flex justify-center md:justify-end">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-1 px-3 py-1 rounded-full border border-zinc-700 text-zinc-200 hover:bg-zinc-900 text-sm transition"
                        >
                            <ArrowUp size={16} weight="bold" />
                            Back to top
                        </button>
                    </div>
                </div>

                {/* Big Name / Branding with Back to Top */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left mt-6 md:mt-8 gap-4">

                    <div>
                        <h1 className="font-extrabold uppercase text-white select-none leading-tight">
                            <span className="block text-5xl sm:text-5xl md:text-[6.5rem]">Farhan</span>
                            <span className="block text-5xl sm:text-4xl md:text-[8.5rem]">Mawaludin</span>
                        </h1>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center text-zinc-500 text-xs md:text-sm mt-2">
                    © {new Date().getFullYear()} Farhan. All rights reserved.
                </div>

            </div>
        </footer>
    );
}