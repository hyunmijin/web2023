import React from 'react';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <nav className={props.attr}>
                <div>
                    <div className='nav1'>
                        <ul>
                            <li>
                                <Link to='/'>Celebrities</Link>
                                <ul className='submenu'>
                                    <li><Link to='/'>Brigitte Bardot</Link></li>
                                    <li><Link to='/'>Candice Bergen</Link></li>
                                    <li><Link to='/'>Clint Eastwood</Link></li>
                                    <li><Link to='/'>Dean Martin</Link></li>
                                    <li><Link to='/'>Dennis Wilson</Link></li>
                                    <li><Link to='/'>Elizabeth Taylor</Link></li>
                                    <li><Link to='/'>Elvis Presley</Link></li>
                                    <li><Link to='/'>Frank Sinatra</Link></li>
                                    <li><Link to='/'>Isaac Hayes</Link></li>
                                    <li><Link to='/'>James Taylor</Link></li>
                                    <li><Link to='/'>John Wayne</Link></li>
                                    <li><Link to='/'>Kevin Costner</Link></li>
                                    <li><Link to='/'>Kirk Douglas</Link></li>
                                    <li><Link to='/'>Natalie Wood</Link></li>
                                    <li><Link to='/'>Paul Newman</Link></li>
                                    <li><Link to='/'>Rod Taylor</Link></li>
                                    <li><Link to='/'>Steve McQueen</Link></li>
                                    <li><Link to='/'>Yvette Mimieux</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='title'>
                        <h1>John R. Hamilton</h1>
                    </div>
                    <div className='nav2'>
                        <div></div>
                        <div>
                            <h5 className='logo'>Login</h5>
                            <h5 className='sns'></h5>
                            <h5 className='cart'></h5>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <img src="../assets/images/header/header.jpg" alt="이미지1" />
                </div>
            </nav>
        </div>
        
  );
}

export default Header;
