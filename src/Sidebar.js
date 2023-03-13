import React from 'react';
import './Sidebar.css';

import Logo from './Assests/Logo.png';
import ctower from './Assests/control-tower.png';
import Dashboard from './Assests/Dashboard.png';
import Siren from './Assests/Siren.png';
import notifybell from './Assests/notify-bell.png';
import growthgraph from './Assests/growth-graph.png';
import notepad from './Assests/note-pad.png';
import User from './Assests/User.png';
import logout from './Assests/log-out.png';

const Sidebar = () => {
  return ( 
    <div className='wrapper'>
        <div className='sidebar_icons'>
        <img src={Logo}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={ctower}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={Dashboard}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={Siren}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={notifybell}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={growthgraph}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={notepad}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={User}></img>
        </div>
        <div className='sidebar_icons'>
        <img src={logout}></img>
        </div>
      </div>
    
  );
};

export default Sidebar;