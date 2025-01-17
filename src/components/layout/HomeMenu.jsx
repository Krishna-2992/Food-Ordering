import Image from "next/image"
export default function HomeMenu() {
    return (
        <section>
            <div className="h-48 relative">
                <Image src="/sallad1.png" layout="fill" objectFit="contain" alt="salad" />
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-600 font-semibold  leading-4">Check Out</h3>
                <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>
        </section>
    )
}