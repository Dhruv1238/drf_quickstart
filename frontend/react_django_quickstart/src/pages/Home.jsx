import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const Home = () => {
    let [data, setData] = useState([]);

    useEffect(() =>{
        getData();
    }, [])

    let getData = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/data/');
        let data = await response.json();
        console.log("data",data)
        setData(data);
    }

  return (
    <>
    <div className='text-blue-500 text-center text-2xl font-bold p-5'>
        {data.map((item, index)=>(
            <Link to={`/data/${item.id}`}>
            <h2 key={index}>{item.type}</h2>
            </Link>
        ))}
    </div>
    </>
  )
}

export default Home