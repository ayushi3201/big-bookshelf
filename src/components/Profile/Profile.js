import user from '../../images/user.png';
// import edit from '../../images/edit.png';
import inbox from '../../images/envelope.png';
import settings from '../../images/settings.png';
import help from '../../images/question.png';
import logout from '../../images/log-out.png';
import './style.css';

import React, {useState, useEffect, useRef} from 'react';

function Profile() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user} alt=""></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          
          <ul>
            <DropdownItem img = {user} text = {"My Profile"} alt="" />
            {/* <DropdownItem img = {edit} text = {"Edit Profile"} alt="" /> */}
            <DropdownItem img = {inbox} text = {"Inbox"} alt="" />
            <DropdownItem img = {settings} text = {"Settings"} alt="" />
            <DropdownItem img = {help} text = {"Help"} alt="" />
            <DropdownItem img = {logout} text = {"Logout"} alt="" />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt=""></img>
      <a href='/'> {props.text} </a>
    </li>
  );
}

export default Profile;