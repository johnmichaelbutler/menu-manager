import React from 'react';
import './hero.styles.scss';
import CustomButton from '../customButton/customButton.component';

const Hero = () => (
  <section className="hero">
    <div className='hero-background-image'>
      <div className='hero-content-area'>
        <div className='hero-text-area'>
          <h1>Menu Manager</h1>
          <h2>A place to find local menus</h2>
        </div>
        <div className='hero-button-area'>
          <CustomButton className='homepageButton' type='button'>See Local Menus</CustomButton>
          <CustomButton className='homepageButton' type='button'>Manager Sign In</CustomButton>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
