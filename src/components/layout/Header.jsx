import Link from "next/link";
export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-2xl" href={''}>SI Pizza</Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={''}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
                <Link className="bg-primary text-white py-2 px-8 rounded-full" href={''}>Login</Link>
            </nav>
        </header>
    )
}