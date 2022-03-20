import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      
      <h1>Home Page</h1>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
    
    </div>
  )
}
