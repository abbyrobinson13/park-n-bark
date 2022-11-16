import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { dogFact } from '../server-functions'



const DogFactBox = () => {
  const [fact, setFact] = useState("Fact loading...")
  
    useEffect(() => {
      const getFact = async() => {
        let fact = await dogFact()
        setFact(fact)
      }
      getFact()
    }, [])

  return (
    <div>Dog Fact: {fact}</div>
  )
}

export default DogFactBox