import Head from 'next/head'
import About from "../components/About";
import Work from '../components/Work';



export default function Home() {
  return (
   <div className="space-y-14 lg:space-y-24">
     <html lang="en">
      <Head>
        <title>Vishal Maurya - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
        <Work />
      </main>
      </html>
    </div>
  )
}
