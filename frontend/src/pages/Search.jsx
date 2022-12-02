import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchModal from '../components/SearchModal'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [parks, setParks] = useState([]) 
  const [value, setValue] = useState('')
  const [park, setPark] = useState()
  const [num, setNum] = useState(0)
  
  const getFilteredParks = async(v) => {
    const serverReq = await fetch(`/api/park/${v}`)
    const filteredParks = await serverReq.json()
    setParks(filteredParks)
  }

  useEffect(() => {
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      console.log(param, value);
      setValue(value)
    }
    getFilteredParks(value)
  }, [searchParams])

  const handleClick = (p) => {
    setNum(() => num + 1)
    setPark(p)
   }
  
  return (
    <header className="App-header">
      Search Reults for '{value}':
        <div className="big-search">
        {parks
          .filter((post) => {
            if (value === "") {
              return null;
            } else if (post.properties.title.toLowerCase().includes(value.toLowerCase()) || post.properties.address.toLowerCase().includes(value.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <div className="box" key={index} onMouseDown={(event) => event.preventDefault()} onClick={() => handleClick(post)}>
              <span>{post.properties.title}</span>
              <span>{post.properties.address}</span>
            </div>
          ))}
      </div>
      <div>
        <SearchModal parks={park} num={num}/>
      </div>
      </header>
  )
}

export default Search