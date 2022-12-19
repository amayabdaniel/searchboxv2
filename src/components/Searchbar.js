import { useState } from "react";
import "./Searchbar.css";
import SearchIcon from '@mui/icons-material/Search';

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = data.filter((item) => {
      return item.title.includes(searchWord);
    });
    setFilteredData(newFilter);
  }
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Search" onChange={handleFilter} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="dataItem">
                <p> {value.title} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar