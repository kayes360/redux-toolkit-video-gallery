import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Tags from "../components/tags/Tags"
import VideoGrid from "../components/grid/VideoGrid"
import Pagination from '../components/ui/Pagination'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
        <Navbar/>
        <Tags/>
        <VideoGrid/>
        <Pagination/>
        <Footer/>

    </>
  )
}
