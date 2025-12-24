import React, {useState} from 'react'
import {Link} from "react-router-dom"
import logo from './../assets/Images/logo.png'
import HeaderItem from './HeaderItem';
import avatar from './../assets/Images/avatar.svg'
import {HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiTv, 
    HiPlayCircle} from "react-icons/hi2";
    import {HiPlus,HiDotsVertical} from "react-icons/hi"

function Header() {
    const [toggle,setToggle]=useState(false)
    const menu =[
        {
            name: 'HOME',
            icon:HiHome,
            path: '/'
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass,
            path: '/search'
        },
        {
            name:'WATCH LIST',
            icon:HiPlus,
            path: '/watchList'
        },
        {
            name: 'ORIGINALS',
            icon: HiStar,
            path: '/originals'
        },
        {
            name:'MOVIES',
            icon: HiPlayCircle,
            path: '/movies'
        },
        {
            name:'SERIES',
            icon: HiTv,
            path: '/series'
        
        }
    ]
  return (
     <div className="flex items-center justify-between p-5">
      {/* Logo */}
      <img src={logo} alt="Disney logo" className="w-[80px] md:w-[115px] object-cover" />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {menu.map((item) => (
          <Link key={item.name} to={item.path}>
            <HeaderItem name={item.name} Icon={item.icon} />
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden gap-5 relative">
        {menu.slice(0, 3).map((item) => (
          <Link key={item.name} to={item.path}>
            <HeaderItem name={''} Icon={item.icon} />
          </Link>
        ))}

        {/* Toggle dropdown */}
        <div onClick={() => setToggle(!toggle)}>
          <HeaderItem name='' Icon={HiDotsVertical} />
        </div>

        {toggle && (
          <div className="absolute top-full mt-2 bg-[#121212] border-[1px] border-gray-700 p-4">
            {menu.slice(3).map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setToggle(false)}>
                <HeaderItem name={item.name} Icon={item.icon} />
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* User Avatar */}
      <img
        src={avatar}
        className='w-[40px] rounded-full'
      />
    </div>

  )
}

export default Header