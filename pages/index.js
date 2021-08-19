import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Job-Listing -Home</title>
        <meta name="description" content="search your jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <Link href="/test/jobs">
        <a className="link">go to jobs page</a>
     </Link> 
    </div>
  )
}
