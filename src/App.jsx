import React from 'react'
import Card from './components/Card'
import Profile from './components/Profile';
import { ContactForm } from './components/ContactForm';
import Container from './components/Container'
import { FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

function App() {
  const data = [
    { logo: <FaLinkedin  />, name: "LinkedIn", link: "https://www.linkedin.com/in/adityak19/", },
    { logo: <FaGithub  />, name: "GitHub", link: "https://github.com/adityak-19", },
    { logo: <SiTryhackme  />, name: "TryHackMe", link: "https://tryhackme.com/p/a0x19", },
    { logo: <FaXTwitter  />, name: "Twitter", link: "https://x.com/adityak__19", },
    { logo: <FaMedium  />, name: "Medium", link: "https://medium.com/@adityakx19", }
  ];

  return (
    <div className="relative w-full bg-[url('./assets/bg.jpg')] bg-cover flex flex-col items-center py-5 px-4 md:px-12">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <Profile />
        <Container data={data} />
        <ContactForm />
      </div>
    </div>
  )
}


export default App