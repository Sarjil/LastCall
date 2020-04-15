import React from 'react';
import {Link} from 'react-router-dom';

const Header = props => { 
     
    return(
    
    <header className="feed-main-header nav-bar"> 

        <div className="header-links"> 
        
            <div className="header-title-div">
                <h2 className="header-title-div-link"> 
                    <Link className="header-link" to='/'> LastCall </Link>
                </h2>
              <h3 className="header-sub"> Drink Socially </h3>
            </div>


            <div className="header-pub-div">
                <Link className="header-link" to='/feed'>The Pub</Link>
            </div>

            <div className="header-breweries-div">
                <Link className="header-link" to='/breweries'>Breweries</Link>
            </div>

            <div className="header-beers-div">
                <Link className="header-link" to='/beers'>Beers</Link>
            </div>

            <div className="header-Addbreweries-div">
                <Link className="header-link" to='/breweries/new'>Add a Brewery</Link>
            </div>
            
            <div className="header-Addbeers-div">
                <Link className="header-link" to='/beers/new'>Add a Beer</Link>
            </div>


            <div className="profile-pic">
                <img className="user-pic div" src={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v246-nunoon-35-icon_2.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f7f3e2bf8d881764ad350608b51a50e4"} />
                <div className="dropdown-arrow"></div>
                <ul className="header-dropdown">
                    <li onClick={props.logout}> Logout</li>
                </ul>
            </div>
             
        
        
        </div>





    </header>
)
    } 

export default Header;