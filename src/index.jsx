import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import casa from '../src/House.svg'


function App(){
  return(
    <div className='todo'>
      <header>
      <img src={casa} alt="React Logo" height='35' width='35' />
      <p> > </p>
        <button>Membership</button>
      </header>







    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));