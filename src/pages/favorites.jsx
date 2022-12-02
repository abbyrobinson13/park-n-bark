import React, { useEffect, useState } from 'react'
import SearchModal from '../components/SearchModal'
import { deleteFav } from '../server-functions'

const Favorites = () => {
  const [parks, setParks] = useState([]) 
  const [park, setPark] = useState()
  const [num, setNum] = useState(0)
  
  const getFavParks = async(v) => {
    const uid = '1a'
    const serverReq = await fetch(`/api/favorite/${uid}`)
    const favParks = await serverReq.json()
    console.log(favParks)
    setParks(favParks)
  }

  useEffect(() => {
    getFavParks()
  }, [])

  const handleClick = (p) => {
    setNum(() => num + 1)
    setPark(p.favPark)
   }

  const handleDelete = async(p) => {
    await deleteFav(p)
    getFavParks()
  }
  
  if(!parks[0]){
    return(
      <header className="App-header">
        No Favorites
      </header>
    )
  }
  return (
    <header className="App-header">
      Favorite parks:
        <div className="big-search">
        
        {parks.map((post, index) => (<div>
            <div className="box" key={index} onMouseDown={(event) => event.preventDefault()} onClick={() => handleClick(post)}>
              <span>{post.favPark.properties.title}</span>
              <span>{post.favPark.properties.address}</span>
            </div>
            <button onClick={() => handleDelete(post)}>Delete favorite</button>
            </div>
          ))}
      </div>
      <div>
        <SearchModal parks={park} num={num}/>
      </div>
      </header>
  )
}

export default Favorites