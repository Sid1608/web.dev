import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <Title>Ninja List | Home</Title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Hello My name is siddharth akar. i am a passionate full stack developer. my hobby is competitive programming</p>
      <p className={styles.text}> I have expertise in mern stack</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    
    </div>
    </>
  )
}
