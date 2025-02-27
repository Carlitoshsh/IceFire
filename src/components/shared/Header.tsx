import Link from "next/link";

export default function Header() {
    return <header className="flex items-center justify-between">
        <span className="text-2xl">IceFireUI</span>
        <nav className="flex gap-3">
            <Link href="/">Home</Link>
            <Link href="/houses">Houses</Link>
            <Link href="/about">About</Link>
        </nav>
    </header>
}