import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = ({ country }) => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (country) {
      getCity();
   
    } else {
      setData(initialData);
    }
  }, [country, initialData]);



  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/countries");
      setInitialData(response.data);
      setData(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCity = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/countries/${country}`
      );
      setData([response.data]);
    } catch (err) {
      console.error(err.message);
    }
  };


  

  return (
    <div>
<div className='table-responsive-md'>
<table className="table  table-hover">
  <thead>
    <tr>
      <th scope="col">Overall Rank</th>
      <th scope="col">Country</th>
      <th scope="col">Score</th>
      <th scope="col">GDP</th>
      <th scope="col">Helpfulness</th>

    </tr>
  </thead>
  <tbody>
        {data.map(item=>(
          
            <tr key={item.overallrank}>
            <th scope="row">{item.overallrank}</th>
            <td>{item.country}</td>
            <td>{parseFloat(item.score)}</td>
            <td>{parseFloat(item.gdppercapita)}</td>
            <td>{parseFloat(item.generosity)}</td>

            </tr>
        ))}

  </tbody>
</table>
</div>






    </div>
  )
}

export default Table