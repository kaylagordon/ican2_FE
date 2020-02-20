import React from 'react';
import './Splash.scss';
import { Link } from 'react-router-dom';

const Splash = () => {

  return (
    <section className='splash-container'>
      <p>welcome! <br /> we are so glad you're here.</p>
      <Link to='/login'>
        <button className='login-button'>log in</button>
      </Link>
      <Link to='/signup'>
        <button className='sign-up-button'>sign up</button>
      </Link>
      <Link to='/about'>learn more about ican2</Link>
    </section>
  );
}

export default Splash;
