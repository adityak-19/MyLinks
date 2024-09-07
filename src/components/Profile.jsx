import React from 'react';
import profileImage from '../assets/Photo001.jpg';
import '@fontsource/poppins'; 
import '@fontsource/merriweather'; 

function Profile() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-0">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-600 mb-6 md:mb-8 flex items-center justify-center">
        <img className="w-full h-full rounded-full" src={profileImage} alt="Profile" />
      </div>
      <h1
        style={{ textShadow: '2px 2px #176B87' }}
        className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-[#F2DEBA] font-[Poppins]"
      >
        Hi, I'm Aditya
      </h1>
      <div className="w-full max-w-md px-4">
        <p className="text-base md:text-lg font-medium text-center mb-2 font-mono text-[#CBEDD5] leading-relaxed">
          I'm a passionate Cybersecurity and Development enthusiast, constantly learning and seeking opportunities to enhance my skills and knowledge. Let's connect and explore together...
        </p>
      </div>
    </div>
  );
}

export default Profile;
