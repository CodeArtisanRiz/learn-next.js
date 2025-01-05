import React from "react";

interface CardProps {
  heading: string;
  subHeading: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ heading, subHeading, imageUrl }) => {
  return (
    <div className="flex items-center rounded-lg shadow-lg bg-white p-6 max-w-2xl mx-auto">
      {/* Left Content: Heading and Subheading */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
        <p className="text-gray-600 mt-2">{subHeading}</p>
      </div>
      {/* Right Content: Image */}
      <div className="w-1/3 flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Card Image"
          className="h-auto max-h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default Card;
