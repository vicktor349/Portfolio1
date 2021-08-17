import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopNav.css'

const TopNavbar = () => {
    return (
        <div className="maintop-div">
            <div className="navitem-div">
                <ul className="list-items">
                    <li className="link-list"><Link to="/">Home</Link></li>
                    <li className="link-list"><Link to="/contacts">Contacts</Link></li>
                    <li className="link-list"><Link to="/cv">CV</Link></li>
                    <li className="link-list"><Link to="/certificates">Certificates</Link></li>
                </ul>
        </div>
        </div>
    );
}
 
export default TopNavbar;