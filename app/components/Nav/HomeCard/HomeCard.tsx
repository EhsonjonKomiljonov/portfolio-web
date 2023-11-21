import React from 'react';
import './home-card.scss';

const HomeCard = ({ obj }: any) => {
  const { title, desc } = obj;
  return (
    <div className="home-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default HomeCard;
