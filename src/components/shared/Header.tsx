import Link from "next/link";

export default function Header() {
    return <header>
        <span className="text-2xl">IceFireUI</span>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/houses">Houses</Link>
            <Link href="/about">About</Link>
        </nav>
    </header>
}