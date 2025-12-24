import React from 'react'
import disney from './../assets/Images/Disney.png'
import marvel from './../assets/Images/marvel.png'
import pixar from './../assets/Images/Pixar.png'
import nationalgeo from './../assets/Images/nationalG.png'
import starwars from './../assets/Images/starwar.png'

import disneyvid from './../assets/Videos/disney.mp4'
import marvelvid from './../assets/Videos/marvel.mp4'
import pixarvid from './../assets/Videos/pixar.mp4'
import ngvid from './../assets/Videos/national-geographic.mp4'
import starwarsvid from './../assets/Videos/star-wars.mp4'


function ProductionHouse() {

    const productionHouseList= [
        {
            id:1,
            image:disney,
            video:disneyvid
        },
        {
            id:2,
            image:pixar,
            video:pixarvid
        },
        {
            id:3,
            image:marvel,
            video:marvelvid
        },
        {
            id:4,
            image:starwars,
            video:starwarsvid
        },
        {
            id:5,
            image:nationalgeo,
            video:ngvid
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gradient-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl shadow-black'>
               <video key= {item.id} src={item.video} muted autoPlay loop playsInline
                className='absolute top-0 rounded-md z-0 opacity-0
                hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1]' />
                

            </div>
        ))}
    </div>
  )
}

export default ProductionHouse