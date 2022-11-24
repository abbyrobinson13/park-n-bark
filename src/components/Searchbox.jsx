import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useId, useState } from 'react'

const Searchbox = () => {
    const id = useId();
    const [input, setInput] = useState("Search");
    
    const formSubmit = (e) => {
        e.preventDefault()
        console.log(id, 'Search input:', input)
    }

    const countries = [

      { name: "Belgium", continent: "Europe" },
      { name: "India", continent: "Asia" },
      { name: "Bolivia", continent: "South America" },
      { name: "Ghana", continent: "Africa" },
      { name: "Japan", continent: "Asia" },
      { name: "Canada", continent: "North America" },
      { name: "New Zealand", continent: "Australasia" },
      { name: "Italy", continent: "Europe" },
      { name: "South Africa", continent: "Africa" },
      { name: "China", continent: "Asia" },
      { name: "Paraguay", continent: "South America" },
      { name: "Usa", continent: "North America" },
      { name: "France", continent: "Europe" },
      { name: "Botswana", continent: "Africa" },
      { name: "Spain", continent: "Europe" },
      { name: "Senegal", continent: "Africa" },
      { name: "Brazil", continent: "South America" },
      { name: "Denmark", continent: "Europe" },
      { name: "Mexico", continent: "South America" },
      { name: "Australia", continent: "Australasia" },
      { name: "Tanzania", continent: "Africa" },
      { name: "Bangladesh", continent: "Asia" },
      { name: "Portugal", continent: "Europe" },
      { name: "Pakistan", continent: "Asia" },
    ];

    
   
    return (
      <div>
        <form id={id} className="Nav3" onSubmit={formSubmit} value={input}>
        <input type="search" placeholder={input} onInput={e => setInput(e.target.value)}/>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className='list'>
      {countries.filter(post => {
      if (input === '') {
        return null;
      } else if (post.name.toLowerCase().includes(input.toLowerCase())) {
        return post;
      }
    }).map((post, index) => (
      <div className="box" key={index}>
        <p>{post.name}</p>
        <p>{post.continent}</p>
      </div>
    ))}
    </div>
  
  </div>
    );

}

export default Searchbox
