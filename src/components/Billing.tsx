import apple from '../assets/apple.svg';
import bill from '../assets/bill.png';
import google from '../assets/google.svg';

const Billing = () => (
  <section id='product' className='section-reverse'>
    <div className='section-img-reverse'>
      <img src={bill} alt='billing' className='w-[100%] h-[100%] z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white-gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-gradient' />
    </div>

    <div className='section-info'>
      <h2 className='heading-secondary'>
        Easily control your <br className='sm:block hidden' /> billing &
        invoicing.
      </h2>
      <p className='paragraph max-w-[470px] mt-5'>
        Revolutionize your subscription management effortlessly with our App.
        Seamlessly automate recurring payments while tracking purchase history
        with ease.
      </p>
      <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
        <img
          src={apple}
          alt='app_store'
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />
        <img
          src={google}
          alt='google_play'
          className='w-[128px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </div>
  </section>
);

export default Billing;
