import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

function Header() {
  return (
    <div className = "header">
      <img
        className = "header__logo"
        src = "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"/>

      <div className="header__delivery">
        <PlaceOutlinedIcon className='header__deliveryLogo'/>
        <div className='header__option'>
          <span className='header__optionLineOne'>Delivering to</span>
          <span className='header__optionLineTwo'>Lleida 25005</span>
        </div>
      </div>
      <div className = "header__search">
        <input
          className='header__searchInput'
          type='text'
          placeholder='Search Amazon.com'>
        </input>
        <SearchIcon className="header__searchLogo"/>
      </div>

      <div className='header__nav'>
        {/*Language logo*/}
        <div className='header__option'>
          <span className='header__optionLineOne'>Hello, sign in</span>
          <span className='header__optionLineTwo'>Accounts & Lists</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

      </div>
    </div>
  )
}

export default Header