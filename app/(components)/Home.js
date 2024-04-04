'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('/api/details', {
            cache: 'no-store'
        })

        if (!data.ok) {
            console.log('Error fetching meetups')
        }

        const json = await data.json();

        console.log(json)

        setDetails(json.data)
    }


    const deleteHandler = async (id) => {
        const data = await fetch(`http://localhost:3000/api/details/${id}`, {
            method: 'DELETE'
        })


        if (!data.ok) {
            console.log('error while deleting')
        }

        const json = await data.json();

        console.log(json)
        fetchData()
    }

    return (
        <div className='ml-[25%] w-4/12'>
            {details && details.map(detail => <div className='border border-gray-600 p-4 m-2 '>
                <h1>{detail.title}</h1>
                {/* <h2>{detail.address}</h2> */}
                <img src={detail.image} alt='img' />
                {/* <p>{detail.description}</p> */}

                <Link href={detail._id}><button  className='bg-red-900 text-white p-2 m-2 rounded-lg'>Details</button> </Link>
                <button onClick={() => deleteHandler(detail._id)} className='bg-purple-900 text-white p-2 m-2 rounded-lg'>Delete</button>

            </div>)}
        </div>
    )
}

export default Home
