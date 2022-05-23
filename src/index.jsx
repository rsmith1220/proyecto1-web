import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import casa from '../src/House.svg'


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
      </header>







    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));