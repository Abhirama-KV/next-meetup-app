'use client'

import React, { useState } from 'react'

const Add = () => {
    const [details,setDetails] = useState({title:'',image:'',address:'',description:''})

    const detailHandler = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        
        setDetails({
            ...details,
            [name]:value
        })
       
    }

    const submitHandler = async (e)=>{
        e.preventDefault()
        const data = await fetch('/api/details',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(details)
        })
        const json = await data.json();
        console.log(json)
        console.log(details)
    }

    

    return (
        <div className=''>
            <form className='ml-[35%] mt-[10%] border border-black w-4/12 p-2 rounded-lg' onSubmit={submitHandler}>

                <div className='my-2'>
                    <h1>Meetup Title:</h1>
                    <input className='border border-gray-500 rounded-md' onChange={detailHandler} name='title'/>
                </div>

                <div className='my-2'>
                    <h1>Image URL:</h1>
                    <input className='border border-gray-500 rounded-md w-11/12' onChange={detailHandler} name='image'/>
                </div>

                <div className='my-2'>
                    <h1>Address:</h1>
                    <input className='border border-gray-500 rounded-md w-11/12' onChange={detailHandler} name='address'/>
                </div>

                <div className='my-2'>
                    <h1>Description</h1>
                    <textarea className='border border-gray-500 rounded-md w-11/12 h-36' onChange={detailHandler} name='description'/>
                </div>

                <button className='bg-purple-900 text-white p-2 m-2 rounded-lg'>ADD</button>
            </form>
        </div>
    )
}

export default Add
