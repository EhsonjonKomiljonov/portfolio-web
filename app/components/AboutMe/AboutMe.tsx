import Image from 'next/image';
import React from 'react';
import './about-me.scss';
import GitHub from '../../../public/github.svg';
import Insta from '../../../public/instagram.svg';
import Tg from '../../../public/telegram.svg';
import Me from '../../../public/me.png';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ x: -100, y: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, y: 0, transition: {duration: 1} }}
      className="about-me"
    >
      <Image
        className="about-me__img"
        src={Me}
        alt="Me"
        width={200}
        height={200}
      />
      <div>
        <div className="about-me__work flex items-center flex-col">
          <h2>Ehsonjon Komiljonov</h2>
          <p>Frontend developer</p>
        </div>
        <ul className="about-me__socials">
          <li>
            <a href="https://instagram.com/ek_dev_" target="_blank">
              <Image src={Insta} alt="" />
            </a>
          </li>
          <li>
            <a href="https://t.me/ek_devv" target="_blank">
              <Image src={Tg} alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/EhsonjonKomiljonov" target="_blank">
              <Image src={GitHub} alt="" />
            </a>
          </li>
        </ul>
        <div className="about-me__contact">
          <ul>
            <li>
              <p className="title">Phone</p>
              <a href="tel:+998977516015">+998 (97) 751-60-15</a>
            </li>
            <li>
              <p className="title">Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ekomiljonov29@gmail.com"
                target="_blank"
              >
                ekomiljonov29@gmail.com
              </a>
            </li>
            <li>
              <p className="title">Location</p>
              <p>Tashkent, Uchtepa</p>
            </li>
          </ul>
          <a
            className="resume-button"
            href="/Resume.pdf"
            download="Ehsonjon_resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
