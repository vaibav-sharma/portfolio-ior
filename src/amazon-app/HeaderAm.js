import React from 'react'
import "./HeaderAm.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className="header__amazon">

            <Link to="/checkout">
                <img className="header__logoAm" src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" />
            </Link>
            <div className="header__searchAm" >
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne" >Hello Vaibav</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout">
                <div className="header__optionBasket">
                <ShoppingBasketIcon className="header__basketIcon"/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </Link>

            </div>
            
        </nav>
    )
}

export default Header
