import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import { ImagesData } from '../components/Carousel/ImagesData'

const Main = () => {
  return (
    <header className="App-header">
        <Carousel slides = {ImagesData} />
      </header>
  )
}

export default Main