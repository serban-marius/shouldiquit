// index.tsx
import React from 'react'
import Head from 'next/head'
import Widget from '../component/widget'
import Footer from '../component/footer'

interface IPage {
  initialReason: string[]
}

const Page: React.FC<IPage> = ({ initialReason }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://shouldiquit.today/quit.svg"
          sizes="32x32"
        />
        <title>Should I Quit Today?</title>
      </Head>
      <div className={`wrapper`}>
        <Widget reason={initialReason} />
        <div className="meta">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Page
