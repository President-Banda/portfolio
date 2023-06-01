import React from 'react';

const VerticalTimeline = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="col-span-1">
        <div className="relative">
          <div className="absolute h-full w-1 bg-sakura left-1/2 transform -translate-x-1/2"></div>
          <div className="relative flex flex-col">
            <div className="h-8 w-8 rounded-full bg-sakura-light mb-4"></div>
            <div className="h-8 w-8 rounded-full bg-sakura-light mb-4"></div>
            <div className="h-8 w-8 rounded-full bg-sakura-light mb-4"></div>
            {/* Add more circles as needed */}
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="w-16 flex items-center justify-center">
          <p className="text-gray-600">2020</p>
        </div>
        <div className="w-16 flex items-center justify-center">
          <p className="text-gray-600">2021</p>
        </div>
        <div className="w-16 flex items-center justify-center">
          <p className="text-gray-600">2022</p>
        </div>
        {/* Add more years as needed */}
      </div>
    </div>
  );
};

export default VerticalTimeline;
