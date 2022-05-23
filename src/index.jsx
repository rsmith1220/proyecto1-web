import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import casa from '../src/House.svg'
import logo from '../src/memberlogo.png'


import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  return(
    <div className='todo'>
      <header>
      <img  className = 'casita' src={casa} alt="House" height='35' width='35' />
      
        <button className='botoncito'>Membership</button>
        <button className='botoncito'>What's new</button>
        <button className='botoncito'>Safety</button>
        <button className='botoncito'>Parents</button>
        <button className='botoncito'>Fun stuff</button>
        <button className='botoncito'>Apps</button>
        <button className='botoncito'>Help</button>

        <Dropdown className="d-inline mx-2" autoClose="inside">
          <Dropdown.Toggle id="dropdown-autoclose-inside">
            Language select
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">ENGLISH</Dropdown.Item>
            <Dropdown.Item href="#">ESPAÑOL</Dropdown.Item>
            <Dropdown.Item href="#">FRANÇAIS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>
      <img src='https://play.clubpenguin.picpps.com/assets/December-CPI-Announcement-Billboard.jpg'></img>
      <button className='members'><img src={logo}></img>About Membership</button>
<body>
</body>





    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));