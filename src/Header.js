import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import logo from './assets/440px-EBay_logo.png';

function Header() {
    const [{basket, user}] = useStateValue();

    function handleAuthentication() {
        if (user) {
            auth.signOut().then(r => console.log("Logout"));
        }
    }
    
    return (
        <>
            {/*<div className="banner">*/}
            {/*</div>*/}
            <div className="header__sticky-container">
                <nav className="header">
                    <Link to="/">
                        <img className="header__logo"
                             src={logo}
                             alt="Logo"/>
                    </Link>
                    <div className="header__search">
                        <input type="text" className="header__searchInput" placeholder="Search for anything"/>
                        <SearchIcon className="header__searchIcon" />
                    </div>
                    <Link to={!user ? "/login" : "/"} className="header__link">
                        <div className="header__option"
                             onClick={handleAuthentication}
                        >
                            <span className="header__optionLineOne">Hello {user?.email}</span>
                            <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            {/* Shopping Cart Icon */}
                            <svg viewBox="0 0 23 22" id="icon-cart-new" width="100%" height="100%"><path fillRule="evenodd" d="M22 4a.999.999 0 01.97 1.242l-2 8A1 1 0 0120 14H7a1 1 0 01-.97-.758L3.22 2H1a1 1 0 110-2h3a1 1 0 01.97.758L5.78 4H22zm-1.277 2H6.28l1.5 6h11.442l1.5-6zm-4.539 12A2.995 2.995 0 0119 16a2.995 2.995 0 11-2.816 4h-5.368a3 3 0 110-2h5.368zM7 19a1 1 0 102 0 1 1 0 00-2 0zm12 1a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default Header;