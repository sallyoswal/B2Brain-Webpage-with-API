import React from 'react'
import "./sidebar.scss"
import b2b from "./b2blogo.jpg"
import HomeIcon from '@mui/icons-material/Home';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkIcon from '@mui/icons-material/Link';
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export const Sidebar = () => {
    const[isAActive, setIsAActive] = useState(false)
    const[isPActive, setIsPActive] = useState(false)
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>
                    <div className='logoimage'><img src={b2b}/></div><div className='logoname'>B2Brain</div>
            </span>
        </div>
    
        <div className="center">
            <ul>
                <li className='title'><HomeIcon className='icon'/><span><b>Dashboard</b></span></li>
                <li className='title'><StarBorderIcon className='icon'/><span>Intel</span><div className='counter'><span>4 unread</span></div></li>
                <li className='title'><PersonIcon className='icon'/><span>Leads</span><div className='counter'><span>4 unseen</span></div></li>
                <li >
                    <div className="dropdown">
                    <div className="dropdown-btn" onClick={e => setIsAActive(!isAActive)}><p className='title'><BusinessIcon className='icon'/>Accounts</p><KeyboardArrowDownIcon className='arrow'/><span className="fas fa-caret-down"></span></div>
                        {isAActive && (
                                <div className="dropdown-content"> 
                                    <div className="dropdown-item">Manage all</div>
                                    <div className="dropdown-item">Track new accounts</div>
                                     <div className="dropdown-item">Bulk Import</div>
                                </div>
                        )}
                    </div>
                </li>
                <li >
                    <div className="dropdown">
                    <div className="dropdown-btn" onClick={e => setIsPActive(!isPActive)}><p className='title'><SettingsIcon className='icon'/>Preferences</p><KeyboardArrowDownIcon className='arrow'/><span className="fas fa-caret-down"></span></div>
                        {isPActive && (
                            <div className="dropdown-content">
                                <div className="dropdown-item">Product Focus</div>
                                <div className="dropdown-item">Intel preferences</div>
                                <div className="dropdown-item">Lead Persona</div>
                            </div>
                        )}
                    </div>
                </li>
                <li className='title'><LinkIcon className='icon'/><span>Integrations</span></li>
                <li className='title'><GroupsIcon className='icon'/><span>Teams</span></li>
                <li className='title'><ForumIcon className='icon'/><span>Help/Support</span></li>
            </ul>
        </div>
    </div>
  )
}
