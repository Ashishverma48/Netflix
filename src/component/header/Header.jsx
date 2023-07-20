import React, { useState } from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import logo from '../../assests/netflixlogo.png'
import avatar from '../../assests/avatar1.png'
import { AiOutlineSearch,AiFillCaretDown,AiOutlineBell,AiFillCaretUp } from 'react-icons/ai'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import './style.scss'
export const Header = () => {
    const [showinput,setShowInput] = useState(false)
    const [logout,setlogout] = useState(false)
    const [show, setShow] = useState("top");
    const [mobileMenu, setMobileMenu] = useState(false);

    const openSearch = () => {
        setMobileMenu(false);
        
      };
    
      const openMobileMenu = () => {
        setMobileMenu(true);
        
      };
    
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
    
        <div className='logo'><img src={logo} alt="" /></div>
        <ContentWrapper >
        
          <div className='home'>
           <ul className='list_item'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular </li>
            <li>My List </li>
           </ul>
           
          </div>

           <div className='user'>
           <div className='serach'><AiOutlineSearch  onClick={()=>{setShowInput(!showinput)}}/> <input type="text" name="" id="" className={showinput?'ShowInput':'hideInput'} placeholder='Titles,Genres' /></div>
           <AiOutlineBell className='bell'/>
           <div className='user-img' onClick={()=>setlogout(!logout)}>
            <img src={avatar} alt="" />
            {
                logout?<AiFillCaretDown/>:<AiFillCaretUp/>
            }
          <button className={logout?'showlogoutBtn':'hidelogoutBtn'}>Logout</button>
           </div>
           </div>
            
           <div className="mobileMenuItems">
          
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>

        </ContentWrapper>
    </header>
  )
}
