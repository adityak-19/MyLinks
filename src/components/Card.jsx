import React from 'react';

function Card({ logo, name, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div 
        style={{ boxShadow: '0 0 8px black' }} 
        className='outline-1 my-5 mx-4 sm:mx-7 
                   bg-gradient-to-r from-[#00B4DB] to-[#0083B0] 
                   rounded-3xl h-12 sm:h-14 
                   flex items-center gap-4 sm:gap-7 
                   px-4 sm:px-6 text-xl sm:text-2xl
                   justify-center 
                   transform transition-transform duration-300 
                   hover:scale-105 hover:shadow-lg
                   transition-colors duration-300 
                   hover:from-[#00B4DB] hover:to-[#0072C6]'
      >
        <div className='flex items-center justify-center w-16 sm:w-20'>
          <span className="text-white text-2xl sm:text-2xl">{logo}</span>
        </div>
        <div className="flex items-center w-16 sm:w-20 justify-center">
          <h3 style={{ textShadow: '1px 1px 2px #000' }} className='font-mono font-semibold text-white text-lg sm:text-lg'>{name}</h3>
        </div>
      </div>
    </a>
  );
}

export default Card;
