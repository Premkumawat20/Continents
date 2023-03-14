import React, { useState , useEffect } from "react";
import axios from "axios";
function Header ()
{
  const [selectedItem, setSelectedItem] = useState('');
  const [countryname,setCountryname] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    if (selectedItem) {
      fetch(`https://restcountries.com/v2/region/${selectedItem}`)
        .then(response => response.json())
        .then(data => {
          setCountryname(data);
          setFilteredCountries(data);
        })
        .catch(error => console.log(error));
    }
  }, [selectedItem]);
  const items=["Africa", "Americas", "Asia", "Europe", "Oceania"]
  const handleItemClick = (event) => {
    setSelectedItem(event.target.value);
    // console.log(item);  
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterCountries(event.target.value);
  }
  const filterCountries = (searchTerm) => {
    const filtered = countryname.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCountries(filtered);
   }
     return(
       <div className="container">
       <select  class="form-select" aria-label="Default select example"  id="abc" onChange={handleItemClick}>
        <option value={selectedItem}>Select an item...</option>
        {items.map((item,index) => (
          <option key={index} value={item}>
            {item}
            </option>
        ))}
      </select>
      <label htmlFor="country-search" id="labels" > <strong>Search for a country: </strong></label>
      <input type="text" id="country-search" value={searchTerm} onChange={handleSearchChange} />
      <br />    
      <h4 id="h4"><strong>Country details {selectedItem} continent</strong></h4>
     <table class="table table-striped">
               <thead>
        <tr>               
            <th>flag</th>
            <th>Country</th>
               <th>Capital</th>    
            </tr>
        </thead>
        <tbody className="tbcss">
            {filteredCountries.map(country => (         
              <tr className="t">
              <td>
              <img  id="imgs" src={country.flag} width="30px" height='20px'/>
              </td>
            <td> 
          <p>{country.name}</p>
          </td>
          <td> 
          <p>{country.capital}</p>
          </td>  
          </tr>
        ))}                  
        </tbody>
      </table>   
    </div>        
    )
      }
          export default Header;
