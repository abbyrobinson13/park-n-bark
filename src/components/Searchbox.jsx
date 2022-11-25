import React, { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";


const Searchbox = () => {
  const id = useId();
  const [input, setInput] = useState("");
  const [park, setPark] = useState()
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(id, "Search input:", input);
  };

 const handleClick = (p) => {
  
  setPark(p)
 }

  const countries = [
    { _id: 0, name: "Belgium", continent: "Europe" },
    { _id: 1, name: "India", continent: "Asia" },
    { _id: 2, name: "Bolivia", continent: "South America" },
    { _id: 3, name: "Ghana", continent: "Africa" },
    { _id: 4, name: "Japan", continent: "Asia" },
    { _id: 5, name: "Canada", continent: "North America" },
    { _id: 6, name: "New Zealand", continent: "Australasia" },
    { _id: 7, name: "Italy", continent: "Europe" },
    { _id: 8, name: "South Africa", continent: "Africa" },
    { _id: 9, name: "China", continent: "Asia" },
    { _id: 10, name: "Paraguay", continent: "South America" },
    { _id: 11, name: "Usa", continent: "North America" },
    { _id: 12, name: "France", continent: "Europe" },
    { _id: 13, name: "Botswana", continent: "Africa" },
    { _id: 14, name: "Spain", continent: "Europe" },
    { _id: 15, name: "Senegal", continent: "Africa" },
    { _id: 16, name: "Brazil", continent: "South America" },
    { _id: 17, name: "Denmark", continent: "Europe" },
    { _id: 18, name: "Mexico", continent: "South America" },
    { _id: 19, name: "Australia", continent: "Australasia" },
    { _id: 20, name: "Tanzania", continent: "Africa" },
    { _id: 21, name: "Bangladesh", continent: "Asia" },
    { _id: 22, name: "Portugal", continent: "Europe" },
    { _id: 23, name: "Pakistan", continent: "Asia" },
  ];

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
        {countries
          .filter((post) => {
            if (input === "") {
              return null;
            } else if (!open){
              return null
            } else if (post.name.toLowerCase().includes(input.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <div className="box" key={index} onMouseDown={(event) => event.preventDefault()} onClick={() => handleClick(post)}>
              <span>{post.name}</span>
              <span>{post.continent}</span>
            </div>
          ))}
      </div>
      <div>
        <SearchModal parks={park}/>
      </div>
    </div>
  );
};

export default Searchbox;
