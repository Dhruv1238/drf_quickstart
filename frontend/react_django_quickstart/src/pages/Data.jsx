import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router'
import { Button } from "@mui/material";




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
        <div className=' p-2 text-center'>
          <h1>Single Data With id= {id}</h1>
        <p className='p-2'>Type: {data?.type}</p>
        <p className='p-2'>Contetn: {data?.value}</p>
        <p className='p-2'>Created Time: {data?.created_time}</p>
        <p className='p-2'>Updated Time: {data?.updated_time}</p>

              <br />
              

        </div>
        <input className='p-1 rounded-full mx-auto flex bg-slate-200'  type="text" name="vlaue" placeholder="Value" />
        <button className='bg-yellow-500 text-white m-2 p-2 rounded-xl w-fit hover:bg-yellow-600 transition-all duration-300 ease-in-out flex mx-auto' onClick={handleUpdate} type='submit'>Update</button>
        <button className='bg-yellow-500 text-white m-2 p-2 rounded-xl w-fit hover:bg-yellow-600 transition-all duration-300 ease-in-out flex mx-auto' type='submit' onClick={handleDelete}>Delete</button>
        <div className='flex justify-center'>
        <Button variant="contained" color="primary">
           Hello MUI
        </Button>
        </div>

    </>
  )
}

export default Data;