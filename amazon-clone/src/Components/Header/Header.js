import React from 'react'
import classes from './header.module.css'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LowerHeader from './LowerHeader';


function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              ></img>
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <LocationOnIcon />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="" name="" id="" placeholder="search product"></input>
            {/* icons */}
            <SearchIcon />
          </div>

          {/* right side link */}

          <div className={classes.order__container}>
            <a href='' className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg"
                alt=""
              ></img>
              <select name='' id=''>
                <option value="">EN</option>
              </select>
            </a>

            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span> & Orders</span>
            </a>
            {/* cart */}
            <a href='' className={classes.cart}>
              {/* icons */}
              <ShoppingCartIcon  size={35}/>
            <span>0</span>
            </a>
          </div>
        </div>
      </section>

      <LowerHeader />
    </>
  );
}

export default Header