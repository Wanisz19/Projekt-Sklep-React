import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './photos/website.jpg'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'



export default function Header() {
const [{basket, user}, dispatch] = useStateValue()

const handleAuthentication = () => {
    if(user){
        auth.signOut();
    }

}

    return (
        <div className='header'>
            <Link className="header_logo_container" to='/'>
                <img src={Logo}
                    className="header_logo"
                />
            </Link>
            <div
            className="header_search">
                <input
                className="header_searchInput"
                type="text"/>
                <button className="header_searchIcon">Search</button>

            </div>

            <div className="header_nav">
                <Link onClick={handleAuthentication} to={!user &&'/login'} className='header_option'>
                    {/* <div className='header_option'> */}
                        <span
                        className='header_optionLineOne'
                        >Welcom User
                        </span>
                        <span
                        className='header_optionLineTwo'
                        >{user ? "Sign Out" : "Sign In"}</span>
                    {/* </div> */}
                </Link>

                <Link to="/orders"className='header_option'>
                <span
                    className='header_optionLineOne'
                    >Returns
                    </span>
                    <span
                    className='header_optionLineTwo'
                    >Orders</span>
                </Link>

                
                


                {/* <div className='header_option'>
                    <span
                    className='header_optionLineOne'
                    >Your
                    </span>
                    <span
                    className='header_optionLineTwo'
                    >Prime</span>
                </div> */}
                
                <Link to="/checkout" className='header_busket header_option'>
                    {/* <div className='header_busket'> */}
                        <span className='header_optionLineOne'>Busket:</span>
                        <span> {basket.length } items</span>
                    {/* </div> */}
                </Link>
                
            </div>
                            
        </div>
    )
}

