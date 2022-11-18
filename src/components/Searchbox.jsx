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
    return (
        <form id={id} className="Nav3" onSubmit={formSubmit}>
        <input type="search" placeholder={input} onInput={e => setInput(e.target.value)}/>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
}

export default Searchbox
