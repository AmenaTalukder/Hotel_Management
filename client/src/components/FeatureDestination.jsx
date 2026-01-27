import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {

    const navigate=useNavigate()

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'> 
     <Title title='Fetured Destination' subtitle='Discover our handpicked selection of exeptional properties around the world offering unparalleled luxury and unforgettable expericenes,so enjoy your jurney with the joy,hope you Like our service'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room,index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
      className="mt-16 px-8 py-3 text-sm md:text-base font-semibold bg-white border border-gray-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
            View All Destinations
        </button>

    </div>
  )
}

export default FeatureDestination
