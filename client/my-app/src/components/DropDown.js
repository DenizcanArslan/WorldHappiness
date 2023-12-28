import React,{useState,useEffect} from 'react'

const DropDown = ({onFilterChange}) => {

    const [selectedData,updateSelectedData]=useState();

    const handleItemClick=(values)=>{
        //  console.log(`Selected value: ${values}`);
          updateSelectedData(values);

      }

   
   




  return (
    <div className="dropdown ">
  <button className="btn btn-warning dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Filter
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#"  onClick={()=>handleItemClick({sortBy : "overallrank",order: 'ASC'})}>Order by RANK (Default)</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>handleItemClick({sortBy:"gdppercapita",order:"ASC" })}>Order by GDP (ASC) </a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>handleItemClick({sortBy:"gdppercapita",order:"DESC" })}>Order by GDP (DESC) </a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>handleItemClick({sortBy:"generosity",order:"DESC" })}>Order by Helpfulness (DESC) </a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>handleItemClick({sortBy:"generosity",order:"ASC" })}>Order by Helpfulness (ASC) </a></li>

    
  </ul>
</div>
  )
}

export default DropDown