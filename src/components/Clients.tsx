import React from 'react';
import { clients } from '../constants';

const Clients = () => (
  <section id='clients' className='flex-center my-4'>
    <div className='flex-center flex-wrap w-full'>
      {clients.map((client) => (
        <div
          key={client.id}
          className='flex-1 flex-center min-w-[120px] sm:min-w-[192px] '
        >
          <img
            src={client.logo}
            alt='client'
            className='sm:w-[192px] w-[100px] object-contain'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
