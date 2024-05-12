import Image from "next/image";
import Right from "@/components/icons/Right";
export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">Everything<br /> is better<br /> with a <span className="text-primary">pizza</span></h1>
                <p className="my-4 text-gray-500 text-sm">
                    Pizza is the missing piece that makes every
                    day complete, a simple yet delicious joy in
                    life
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary text-white flex gap-2 py-2 px-8 rounded-full uppercase" href={''}>Order Now<Right /></button>
                    <button className="flex gap-2 py-2 text-gray-800 font-semibold">Learn More<Right /></button>
                </div>
            </div>
            <div className="relative h-full">
                <Image src="/pizza.png" alt="pizza" layout="fill" objectFit="contain" />
            </div>
        </section>
    )
}