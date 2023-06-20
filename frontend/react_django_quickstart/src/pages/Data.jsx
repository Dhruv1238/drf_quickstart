import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router'



const Data = ({ match }) => {

    let {id}= useParams();
    let [data, setData] = useState(null);
    const navigate =useNavigate();


    useEffect(()=>{
        getDataValue()
    },[])

    let getDataValue = async()=>{
        let res = await fetch(`http://127.0.0.1:8000/api/data/${id}/`);
        let data = await res.json();
        console.log("data",data)
        setData(data);
    }

    let handleUpdate = async()=>{

      let newValue= document.querySelector('input[name=vlaue]').value;

      if (newValue.trim()!==''){
      fetch(`http://127.0.0.1:8000/api/data/${id}/update`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({value: newValue})
        }
      );
      setData({...data, value: newValue})
      }
      else{
        alert("bad bad");
      }
    }

    let handleDelete= async()=>{
      fetch(`http://127.0.0.1:8000/api/data/${id}/delete`,{
        method : 'DELETE' ,
        headers:{
          'Content-type' : 'application/json'
        },
      })
      navigate(-1);
    }

  return (
    <>
        <h1>Single Data With id= {id}</h1>
        <p>Type: {data?.type}</p>
        <p>Contetn: {data?.value}</p>
        <p>Created Time: {data?.created_time}</p>
        <p>Updated Time: {data?.updated_time}</p>
        <div>
              <input type="text" name="vlaue" placeholder="Value" />
            <button onClick={handleUpdate} type='submit'>Update</button>
        </div>
        <button onClick={handleDelete} type='submit'>Delete</button>

    </>
  )
}

export default Data;