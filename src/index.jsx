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

      <img className='Banner' src='https://play.clubpenguin.picpps.com/assets/December-CPI-Announcement-Billboard.jpg'></img>
      <button className='members'><img className = 'logo' src={logo} alt='member logo'/>  About Membership</button>
      
      <body className='ombligo'>
       
        <img className='sin' src='https://play.clubpenguin.picpps.com/sites/default/themes/snowball/img/penguin-stencil.png'></img>
        <button className='log'>Create a penguin</button>
        
        <img className='official' src='https://play.clubpenguin.picpps.com/assets/sites/default/themes/snowball/img/club-penguin-logo.png'></img>
        
        <button className='log'>Log in</button>
        <img className='con' src="https://play.clubpenguin.picpps.com/sites/default/themes/snowball/img/penguin-tourguide.png" />
      
      </body>

      <footer className='importante'>
        <p className='copyR'>© Disney. Club Penguin™</p>
        <button className='abajo'>Terms of use</button>
        <button className='abajo'>Privacy policy</button>
        <button className='abajo'>Children's Online Privacy Policy</button>
        <button className='abajo'>Your California Privacy Rights</button>
        <button className='abajo'>support@clubpenguin.com</button>
        <p className='legal'>The service provider for this site is Disney Canada Inc., located at 500-1628 Dickson Avenue, Kelowna, British Columbia, Canada V1Y 9X1. Company <br></br>Registration #1879215 VAT#EU826012025</p>
      </footer>



    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));