import React, { Component } from 'react';

class Header extends Component  {
  render () {
    return (
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">
              Chibaba
            </a>
            <ul className="right">
              <li>
                <a>login with Google</a>
              </li>

            </ul>

          </div>
        </nav>
          
        
    );
  }
}


export default Header;