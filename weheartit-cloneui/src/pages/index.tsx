import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/index'
import Header from '../components/Header/header'
import Main from '../components/Main/main'
import Favicon from '../assets/images/favicon.ico'

export default function Home() {
  return (
    <>
      <Head>
        <title>We Heart It | Perca-se no que você ama</title>
        <link rel="icon" href={Favicon} />
      </Head>
      <Header></Header>
      <Container>
        <Main></Main>
      </Container>
    </>
  )
}
