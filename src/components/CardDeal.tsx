import React from 'react';
import card from '../assets/card.png';
import Button from './Button';

const CardDeal = () => (
  <section className='section'>
    <div className='section-info'>
      <h2 className='heading-secondary'>
        Find a better card deal <br className='sm:block hidden' /> in few easy
        steps.
      </h2>
      <p className='paragraph max-w-[480px] mt-5'>
        Unlock financial empowerment with our versatile App. Seamlessly track
        stock market trends and discover exclusive credit card deals, all in one
        convenient platform.
      </p>
      <Button styles='mt-10'></Button>
    </div>

    <div className='section-img'>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal;
