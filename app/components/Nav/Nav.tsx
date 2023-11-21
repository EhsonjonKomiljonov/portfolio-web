'use client';

import React from 'react';
import { HomeCardData } from '../../../db/HomeCardData';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import HomeCard from './HomeCard/HomeCard';
import AboutMe from '../AboutMe/AboutMe';
import './nav.scss';
import { motion } from 'framer-motion';

const Nav = () => {
  function changeTab(button: HTMLElement) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  }

  return (
    <div className="container mx-auto px-40 mt-10">
      <Tabs>
        <TabList className="nav__tab-box">
          <Tab className="nav__tab">
            <div>
              <p>Home</p>
            </div>
          </Tab>
          <Tab className="nav__tab">
            <div>
              <p>Resume</p>
            </div>
          </Tab>
          <Tab className="nav__tab">
            <div>
              <p>Work</p>
            </div>
          </Tab>
          <Tab className="nav__tab">
            <div>
              <p>Contact</p>
            </div>
          </Tab>
        </TabList>

        <div className="flex items-start justify-between">
          <AboutMe />

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          >
            <TabPanel className="nav__tab-panel">
              <h2 className="text-3xl text-white">
                ABOUT ME ㅤ<span>—————————</span>
              </h2>
              <p className="text-white mt-5 leading-7">
                Hello there! I am glad to welcome you in my portfolio. I am
                passionate and versatile frontend developer with a keen interest
                in learning the latest cutting edge technologies. My journey in
                the world of web development has been exciting and I am always
                looking to improve my skills and adopt new trends in the
                industry.
              </p>
              <h2 className="text-3xl text-white mt-8 mb-4">What I do!</h2>
              <div className="flex items-center justify-between">
                {HomeCardData.map((item) => (
                  <HomeCard obj={item} />
                ))}
              </div>
              <div>
                <h2 className="text-2xl text-white mt-8 mb-4">INTERESTS</h2>
                <ul className="flex items-center justify-between w-5/12">
                  <li
                    className="py-1.5 px-5 text-gray-100 rounded-md
                   border-gray-100 border-2"
                  >
                    <p>Ping Pong</p>
                  </li>
                  <li
                    className="py-1.5 px-5 text-gray-100 rounded-md
                   border-gray-100 border-2"
                  >
                    <p>Street workout</p>
                  </li>
                  {/* <li className="py-1.5 px-5 text-gray-100 rounded-md border-gray-100 border-2">
                    <p>Body building</p>
                  </li> */}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl text-white mt-8 mb-4">LANGUAGES</h2>
                <ul className="flex items-center justify-between w-7/12">
                  <li
                    className="py-1.5 px-5 text-gray-100 rounded-md
                   border-gray-100 border-2"
                  >
                    <p>Uzbek</p>
                  </li>
                  <li
                    className="py-1.5 px-5 text-gray-100 rounded-md
                   border-gray-100 border-2"
                  >
                    <p>Russian</p>
                  </li>
                  <li
                    className="py-1.5 px-5 text-gray-100 rounded-md
                   border-gray-100 border-2"
                  >
                    <p>English (Beginner)</p>
                  </li>
                </ul>
              </div>
            </TabPanel>
          </motion.div>
          <TabPanel className="nav__tab-panel">
            <h2 className="text-3xl text-white">
              RESUME ㅤ<span>—————————</span>
            </h2>
            <div className='education' >
              <h3>Education</h3>
              <div>
                <p className='education__title'>Najot Ta'lim</p>
                <time dateTime='2022-09-14' >2022-2023</time>
                <p className='education__desc'>Frontend developer</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="nav__tab-panel">
            <h2>Work</h2>
          </TabPanel>
          <TabPanel className="nav__tab-panel">
            <h2>Contact</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Nav;
