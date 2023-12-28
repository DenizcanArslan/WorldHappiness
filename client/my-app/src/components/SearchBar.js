import React,{useState} from 'react'

const SearchBar = ({onCountryChange}) => {

    const [country,setCountry]=useState("");




const sendData=()=>{

  onCountryChange(country);
}

  return (
    <div className>
    
    <div className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  onChange={(e)=>{setCountry(e.target.value) }} value={country}/>
  <button type="button" className="btn btn-primary" data-mdb-ripple-init onClick={sendData}>
  <i className="fa-solid fa-magnifying-glass"></i>
  </button>
</div>   
 </div>
  )
}

export default SearchBar