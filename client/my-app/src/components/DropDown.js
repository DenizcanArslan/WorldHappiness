import React from 'react';


//REDUX
import {useDispatch} from "react-redux";
import { updateState } from '../redux/sortSlice';


const DropDown = ({onFilterChange}) => {

  const dispatch=useDispatch();



  return (
    <div className="dropdown ">
  <button className="btn btn-warning dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Filter
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#"  onClick={()=>dispatch(updateState({sortBy:"overallrank",orderBy: 'ASC'}))}>order by RANK (Default)</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>dispatch(updateState({sortBy:"gdppercapita",orderBy:"ASC" }))}>order by GDP (ASC) </a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>dispatch(updateState( {sortBy:"gdppercapita",orderBy:"DESC" }))}>order by GDP (DESC) </a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>dispatch(updateState({sortBy:"generosity",orderBy:"DESC" }))}>order by Helpfulness (DESC) </a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>dispatch(updateState({sortBy:"generosity",orderBy:"ASC" }))}>order by Helpfulness (ASC) </a></li>

    
  </ul>
</div>
  )
}

export default DropDown