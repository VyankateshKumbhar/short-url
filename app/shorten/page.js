"use client"
import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
const Shorten = () => {
  const [url,seturl]=useState("")
  const [shorturl,setshorturl]=useState("")
  const [generated,setgenerated]=useState(false)

const generate=()=>{
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    console.log();
    seturl("")
    setshorturl("")
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
  })
  .catch((error) => console.error(error));
}

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
      <button onClick={generate}
      className="bg-purple-500 p-3 py-1 font-bold text-white 
      my-2 rounded-lg cursor-pointer shadow-lg">Generate</button>
      {generated&&<div>{generated}</div>}
    </div>
  )
}

export default Shorten