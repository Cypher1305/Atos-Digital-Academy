import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  slug: string; 
}

export const Card: React.FC<CardProps> = ({ title, description, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-[#1e1e2f] text-white rounded-xl p-5 shadow-md border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
    >
      <h3 className="text-lg font-semibold mb-2 text-indigo-400">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};
