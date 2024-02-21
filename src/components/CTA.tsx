import Button from './Button';

const CTA = () => (
  <section className='flex-center margin-y padding flex-col bg-black-gradient-2 rounded-[20px] box-shadow sm:flex-row'>
    <div className='flex-1 flex flex-col'>
      <h2 className='heading-secondary'>Let’s try our service now!</h2>
      <p className='paragraph max-w-[470px] mt-5'>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className='flex-center ml-0 mt-10 sm:ml-10 sm:mt-0'>
      <Button />
    </div>
  </section>
);

export default CTA;
