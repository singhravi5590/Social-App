import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <Link to="/" style={{textDecoration : "none"}}>
            <span>RaviSocial</span></Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <div className='search-input'>
                <SearchOutlinedIcon/>
                <input type='text' placeholder='search...'/>
            </div>
        </div>
        <div className='nav-right'>
            <PersonOutlineOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className='user'>
                <img src='https://media.istockphoto.com/id/642792008/photo/lonely-man-looking-with-hope-at-horizon-with-sunlight-during-sunset-with-effect-of-light-at.jpg?s=1024x1024&w=is&k=20&c=9uICOXLUgSv0haBg29SuyJhcFkq9oZ9IOgPX_ZgUwMw=' alt='user'/>
                <span>Ravi Singh</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar