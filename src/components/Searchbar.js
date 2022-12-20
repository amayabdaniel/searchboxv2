import { useState } from "react";
import "./Searchbar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setSearchTerm(searchWord);
    const newFilter = data.filter((el) => {
      return el.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  
  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  }
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 10).map((el) => {
            return (
              <div className="dataItem">
                <p> {el.title} </p>
              </div>
            );
          })}
        </div>
      )}
      
    </div>
  );
}

export default Searchbar