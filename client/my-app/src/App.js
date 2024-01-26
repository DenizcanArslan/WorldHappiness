import {useState} from "react";
import "./App.css"
import DropDown from "./components/DropDown";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";


function App() {

const [selectedCountry,setSelectedCountry]=useState("");


const handleCountryChange=(newCountry)=>{
  setSelectedCountry(newCountry);
}



  return (
   <>   
    <div className="container ">
    <div className="row my-md-5 my-0 mt-3">
      <div className="col-md-6">
      <SearchBar onCountryChange={handleCountryChange}/>

      </div>
       <div className="col-md-6 my-4 my-md-0">
      <DropDown  />

      </div> 
    </div>
    <Table  country={selectedCountry} />
    </div>

  


   </>
   
   
  );
}

export default App;
