import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id='client' className='padding-y flex-center flex-col relative'>
    <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div className='w-full flex justify-between items-center flex-col mb-6 relative z-[1] sm:mb-16 md:flex-row'>
      <h1 className='heading-secondary'>
        What people are <br className='hidden sm:block' /> saying about us
      </h1>
      <div className='w-full mt-6 md:mt-0'>
        <p className='paragraph text-left max-w-[450px]'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1] sm:justify-start'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
