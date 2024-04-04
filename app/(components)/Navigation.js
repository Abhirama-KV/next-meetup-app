import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className=''>
            <div className='flex justify-between bg-purple-900 text-white text-xlfont-bold'>
                <Link className='cursor-pointer m-4' href='/'><h1>NEXT MEETUP</h1></Link>
                <div className='flex'>
                    <Link className='cursor-pointer m-4' href='/'><h2>ALL MEETUPS</h2></Link>
                    <Link className='cursor-pointer m-4' href='add'><h2>ADD NEW MEETUP</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
