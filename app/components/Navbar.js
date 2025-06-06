import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="flex h-16 bg-purple-600 justify-between text-white items-center px-3">

        <Link href='/'><div className="font-bold text-2xl">ShortUrl</div></Link>
        <div className="flex items-center gap-4">
        <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About US</Link></li>
            <li><Link href="/shorten">Shorten</Link></li>
            <li><Link href="/">Contacts</Link></li>
        </ul>

            <div className="flex gap-3 ">
            <Link href="/shorten"><button className="bg-purple-400 p-2 py-1 font-bold rounded-lg cursor-pointer shadow-lg">Try Now</button></Link>
            <Link href="/"><button className="bg-purple-400 p-2 py-1 font-bold rounded-lg cursor-pointer shadow-lg">GitHub</button></Link>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
