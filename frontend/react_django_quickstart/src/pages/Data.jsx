import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'



const Data = ({ match }) => {

    let {id}= useParams();
    let [data, setData] = useState(null);

    useEffect(()=>{
        getDataValue()
    },[])

    let getDataValue = async()=>{
        let res = await fetch(`http://127.0.0.1:8000/api/data/${id}/`);
        let data = await res.json();
        console.log("data",data)
        setData(data);
    }

  return (
    <>
        <h1>Single Data With id= {id}</h1>
        <p>Type: {data?.type}</p>
        <p>Value: {data?.value}</p>
        <p>Value: {data?.created_time}</p>

    </>
  )
}

export default Data;