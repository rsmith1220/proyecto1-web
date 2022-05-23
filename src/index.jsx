import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import casa from '../src/House.svg'


import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  return(
    <div className='todo'>
      <header>
      <img src={casa} alt="React Logo" height='35' width='35' />
      
        <button className='botoncito'>Membership</button>
        <button className='botoncito'>What's new</button>
        <button className='botoncito'>Safety</button>
        <button className='botoncito'>Parents</button>
        <button className='botoncito'>Fun stuff</button>
        <button className='botoncito'>Apps</button>
        <button className='botoncito'>Help</button>

        <Dropdown className="d-inline mx-2" autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Clickable Outside
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">ENGLISH</Dropdown.Item>
      <Dropdown.Item href="#">ESPAÑOL</Dropdown.Item>
      <Dropdown.Item href="#">FRANÇAIS</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>








      </header>







    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));