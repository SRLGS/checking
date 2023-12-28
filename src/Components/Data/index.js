import { useState } from "react";
import axios from "axios";
import {v4} from "uuid"
import "./index.css";

const Data = () => {
  const [data, updateData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://tutorial-4537e-default-rtdb.firebaseio.com/register.json"
    );
    updateData(Object.values(response.data));

    //updateData(response[""])
  };

  console.log(data);
  return (
    <div className="resultContainer">
      <h6>Result Container</h6>
      <ul>
        {data.map((res) => (
          <li key={v4()}>
             <li >{res.email}</li> 
          <li >{res.confirmPassword}</li>
          <li >{res.fullName}</li>
          <li>{res.password}</li>
          </li>
        ))}
      </ul>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default Data;
