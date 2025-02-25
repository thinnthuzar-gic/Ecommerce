import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Container from './Container'

const MainLayout = () => {
  return (
    <>
    <Container>
    <Header />
    <Outlet />
    <Footer />
    </Container>
    </>
   
  )
}

export default MainLayout