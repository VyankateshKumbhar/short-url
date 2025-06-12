import {redirect} from "next/navigation"
import clientPromise from '../../lib/mongodb'

export default async function page({params}){
    const shorturl=params.shorturl

    const client=await clientPromise
    const db=client.db("ShortUrl")
    const collection=db.collection("url")

    const doc=await collection.findOne({shorturl:shorturl})
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${NEXT_PUBLIC_HOST}`)
    }
}