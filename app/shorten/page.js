"use client"
import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
const Shorten = () => {
  const [url,seturl]=useState("")
  const [shorturl,setshorturl]=useState("")
  const [generated,setgenerated]=useState(false)
  return (
    <div className='bg-purple-100 flex flex-col max-w-lg mx-auto my-16 p-8 rounded-lg gap-6'>
      <h1 className='font-bold text-2xl'>Generate your short URL</h1>
      <div className="flex flex-col gap-2">
      <input
      className='bg-white px-4 py-2 rounded-md focus:outline-purple-600'
      type="text"
      onChange={(e)=>{seturl(e.target.value)}}
      value={url}
      placeholder="Enter your URL"
      ></input>
      <input
      className='bg-white px-4 py-2 rounded-md focus:outline-purple-600'
      type ="text"
      onChange={(e)=>{setshorturl(e.target.value)}}
      value={shorturl}
      placeholder="Enter your preffered short URL"
      ></input>
      </div>
      <button className="bg-purple-500 p-3 py-1 font-bold text-white 
      my-2 rounded-lg cursor-pointer shadow-lg">Generate</button>
    </div>
  )
}

export default Shorten