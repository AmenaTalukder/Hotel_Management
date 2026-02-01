import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets"
import StarRating from "../components/StarRating"

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
    room && setMainImage(room.images[0])
  }, [id])




  return room && (
    <div className='pt-28 pb-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50'>

      {/* Title */}
      <div className='flex flex-wrap items-center gap-3'>
        <h1 className='text-3xl md:text-4xl font-playfair text-gray-800'>
          {room.hotel.name}
          <span className='ml-2 text-sm text-gray-500 font-inter'>
            ({room.roomType})
          </span>
        </h1>

        <span className='text-xs px-3 py-1 rounded-full bg-orange-500 text-white tracking-wide'>
          20% OFF
        </span>
      </div>

      {/* Rating */}
      <div className='flex items-center gap-2 mt-3'>
        <StarRating />
        <p className='text-sm text-gray-600'>200+ reviews</p>
      </div>

      {/* Address */}
      <div className='flex items-center gap-2 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location" className='w-4' />
        <span className='text-sm'>{room.hotel.address}</span>
      </div>

      {/* Images */}
      <div className='flex flex-col lg:flex-row gap-6 mt-8'>
        <div className='lg:w-1/2'>
          <img
            src={mainImage}
            alt="main"
            className='w-full h-[380px] object-cover rounded-2xl shadow-lg'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 lg:w-1/2'>
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() => setMainImage(image)}
              alt="room"
              className={`h-[180px] w-full object-cover rounded-xl cursor-pointer transition-all
              ${mainImage === image
                  ? 'ring-4 ring-orange-500'
                  : 'hover:scale-[1.03] hover:shadow-lg'}`}
            />
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className='flex flex-col md:flex-row md:justify-between mt-12 gap-6'>
        <div>
          <h2 className='text-3xl font-playfair text-gray-800'>
            Experience Luxury Like Never Before
          </h2>

          <div className='flex flex-wrap gap-3 mt-5'>
            {room.amenities.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border'
              >
                <img src={facilityIcons[item]} alt="" className='w-5 h-5' />
                <p className='text-sm text-gray-700'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='text-3xl font-semibold text-gray-800'>
          ${room.pricePerNight}
          <span className='text-base font-normal text-gray-500'> / night</span>
        </div>
      </div>

      {/* Booking Form */}
      <form className='mt-16 bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 text-gray-600'>

          <div className='flex flex-col'>
            <label className='font-medium'>Check-In</label>
            <input
              type="date"
              className='border rounded-md px-3 py-2 mt-2 focus:ring-2 focus:ring-primary outline-none'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-medium'>Check-Out</label>
            <input
              type="date"
              className='border rounded-md px-3 py-2 mt-2 focus:ring-2 focus:ring-primary outline-none'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-medium'>Guests</label>
            <input
              type="number"
              placeholder='0'
              className='border rounded-md px-3 py-2 mt-2 w-24 focus:ring-2 focus:ring-primary outline-none'
              required
            />
          </div>

          <button
            type="submit"
            className='bg-primary hover:bg-primary-dull transition-all text-white rounded-lg px-8 py-3 mt-6 md:mt-8 active:scale-95'
          >
            Check Availability
          </button>
        </div>
      </form>
              {/* Common Specification */}

      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec,index)=>(
          <div key={index} className='flex items-start gap-2'>
            <img src={spec.icon} alt={`${spec.title}`} className='w-6.5'/>
            <div>
              <p className='text-base'>{spec.title}</p>
                 <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

        <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
          <p>In addition, placeholder text stands out when eyeballed, ensuring that you overwrite the correct paragraphs before updating and reissuing past appeals. Your lorem ipsum generator can also provide multiple versions of a section of text on a single page surrounding the real test message.When your page includes dedicated advertising and editorial slots that do not vary from issue to issue, using dummy copy allows you to preserve the total possible letter or word count.</p>
        </div>
                {/* Hosted By */}
        <div className='flex flex-col items-start gap-4'>
          <div className='flex gap-4'>
            <img
              src={room.hotel.owner?.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full object-cover'
              referrerPolicy="no-referrer"
            />
            <div>
              <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
              <div className='flex items-center mt-1'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
            </div>
          </div>
          <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull trabsition-all cursor-pointer'>Contact Now</button>
        </div>
    </div>
  )
}

export default RoomDetails
