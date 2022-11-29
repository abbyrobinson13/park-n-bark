import React, { useId, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";
import { useNavigate } from 'react-router-dom'

const Searchbox = () => {
  const id = useId();
  const [input, setInput] = useState("");
  const [park, setPark] = useState()
  const [open, setOpen] = useState(false)
  const [parks, setParks] = useState([])
  const [num, setNum] = useState(0)
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate()


  const formSubmit = (e) => {
    e.preventDefault()
    console.log(id, "Search input:", input);
    navigate(`/search?search=${input}`)
  };

 const handleClick = (p) => {
  setNum(() => num + 1)
  setPark(p)
 }

useEffect(() => {
  const parksAndReq = async() => {
    const serverReq = await fetch('/api/park')
    const parkData = await serverReq.json()
    setParks(parkData)
  }
  parksAndReq()
}, [])
 
 

  return (
    <div className="search-container" onFocus={handleOpen}>
      <form id={id} className="search-bar" onBlur={handleClose} onSubmit={formSubmit} value={input}>
        <input
          type="search"
          placeholder="Search"
          onInput={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="list">
        {parks
          .filter((post) => {
            if (input === "") {
              return null;
            } else if (!open){
              return null
            } else if (post.properties.title.toLowerCase().includes(input.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <div className="box" key={index} onMouseDown={(event) => event.preventDefault()} onClick={() => handleClick(post)}>
              <span>{post.properties.title}</span>
            </div>
          ))}
      </div>
      <div>
        <SearchModal parks={park} num={num}/>
      </div>
    </div>
  );
};

export default Searchbox;
