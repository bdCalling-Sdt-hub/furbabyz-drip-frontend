'use client';
import React, { useState } from 'react';

const CategoryBar = () => {
      const categories = [
            { name: 'All' },
            { name: 'Best-Selling Products' },
            { name: 'Limited Editions Collections' },
            { name: 'Dogs T-shirts' },
            { name: 'Dogs Accessories' },
            { name: 'Dog Jackets and Outer-wear' },
            { name: 'Dog Hats' },
      ];

      const [activeCategory, setActiveCategory] = useState('All');

      return (
            <div className="flex flex-wrap gap-2 md:gap-0 justify-center md:justify-start space-x-4 overflow-x-auto my-5">
                  {categories.map((category, index) => (
                        <button
                              key={index}
                              onClick={() => setActiveCategory(category.name)}
                              className={`px-4 py-2 rounded-[8px] ${
                                    activeCategory === category.name
                                          ? 'bg-[#31A2FF] text-white border border-transparent'
                                          : 'bg-transparent border border-[#606060] text-text-primary'
                              }`}
                        >
                              {category.name}
                        </button>
                  ))}
            </div>
      );
};

export default CategoryBar;
