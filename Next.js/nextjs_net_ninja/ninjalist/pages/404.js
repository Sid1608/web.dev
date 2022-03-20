import React,{useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { route } from 'next/dist/server/router'
const NotFound = () => {
    const router =useRouter
    useEffect(()=>{
        setTimeout(()=>{
            // router.push('/');
        },3000)
    },[])
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h1>That page cannot be found.</h1>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFound
