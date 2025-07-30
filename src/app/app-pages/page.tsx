import Image from "next/image";
import { lusitana } from "../../../components/font";

export default function Home() {
    return (
        <main className="flex flex-col bg-transparent">
            <div className="space-y-20 flex flex-col md:flex md:flex-row justify-evenly max-w-7xl w-full mx-auto px-12 py-15 md:px-6 md:py-12">
                {/* Text Section */}
                <div className="flex flex-col justify-center gap-6 md:w-1/2">
                    <p className={`${lusitana.className} text-2xl md:text-4xl leading-snug`}>
                        <strong>Welcome to Your Admin Dashboard</strong>
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                        Monitor your metrics, manage your data, and stay informed with real-time insights.
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
                    <Image
                        src="/hero-desktop.png"
                        fill
                        alt="Dashboard desktop version"
                        className="hidden md:block object-contain"
                    />
                    <Image
                        src="/hero-mobile.png"
                        fill
                        alt="Dashboard mobile version"
                        className="block md:hidden object-contain"
                    />
                </div>
            </div>
        </main>
    );
}
