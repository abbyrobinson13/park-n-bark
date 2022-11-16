import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import { ImagesData } from '../components/Carousel/ImagesData'
import DogFactBox from '../components/DogFactBox'

const Main = () => {
  
  
  return (
    <header className="App-header">
        <Carousel slides = {ImagesData} />
        <DogFactBox />
      </header>
      
 )
}

export default Main