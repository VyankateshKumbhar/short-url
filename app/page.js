import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import localFont from "next/font/local"

const poppins=localFont({
  src:"./fonts/Poppins-ExtraBold.ttf",
  variable:"--font-poppins",
  weight:"100 900",
});
const page = () => {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col px-25 gap-5 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener in the Market</p>
          <p>
            We are the most straighforward URL Shortener in the world.
            Most of the URL Shorteners will track you or ask you to give
            your details for login.We understand your needs and hence We
            have created this URL Shortener.
          </p>
          <div className="flex gap-3">
            <Link href="/shorten"><button className="bg-purple-400 p-2 py-1 font-bold rounded-lg cursor-pointer shadow-lg">Try Now</button></Link>
            <Link href="/"><button className="bg-purple-400 p-2 py-1 font-bold rounded-lg cursor-pointer shadow-lg">GitHub</button></Link>
          </div>
        </div>
        <div className="flex relative justify-start">
          <Image
          src="/staff.png"
          fill={true}
          alt="Picture of the author"
          />
        </div>
      </section>
    </main>
  )
}

export default page
