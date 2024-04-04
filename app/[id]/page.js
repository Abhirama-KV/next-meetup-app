'use client'

import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [detail,setDetail] = useState({})

    useEffect(()=>{
        fetchData()
        
    },[])

    const fetchData = async ()=>{
        const data = await fetch(`/api/details/${params.id}`,{
            method:'GET'
        })

        if(!data.ok){
            console.log('error while fetching data')
        }

        const json = await data.json();

        setDetail(json.message)

        console.log(json)
    }

  return (
    <div className='ml-[25%] w-4/12'>
      {detail && <div className='border border-gray-600 p-4 m-2 '>

                <h1>{detail.title}</h1>
                <h2>{detail.address}</h2>
                <img src={detail.image} alt='img' />
                <p>{detail.description}</p>


            </div>}
    </div>
  )
}

export default page
