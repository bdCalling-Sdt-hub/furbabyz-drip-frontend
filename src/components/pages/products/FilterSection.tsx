'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RxCross2, RxPlus } from 'react-icons/rx';
import { CgChevronDown } from 'react-icons/cg';

interface FilterSectionProps {
      title: string;
      options: string[];
      activeOption: string | null;
      setActiveOption: Dispatch<SetStateAction<string>>;
      isOpen: boolean;
      toggleOpen: () => void;
}

const FilterSection = ({ title, options, activeOption, setActiveOption, isOpen, toggleOpen }: FilterSectionProps) => (
      <div className="mb-4">
            <button className="flex justify-between w-full py-3 duration-500 bg-[#F3F3F3] rounded-lg px-4" onClick={toggleOpen}>
                  <span className="text-lg text-gray-800">{title}</span>
                  <CgChevronDown
                        size={24}
                        className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
            </button>

            <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
            >
                  <div className="flex flex-wrap gap-2 mt-2">
                        {options.map((option, index) => (
                              <button
                                    key={index}
                                    onClick={() => setActiveOption(option)}
                                    className={`px-4 py-2 rounded-[8px] ${
                                          activeOption === option
                                                ? 'bg-[#31A2FF] border text-white border-transparent'
                                                : 'bg-transparent border border-[#606060]'
                                    }`}
                              >
                                    {option}
                              </button>
                        ))}
                  </div>
            </div>
      </div>
);

const FilterPanel = () => {
      const [activeCategory, setActiveCategory] = useState('New Arrivals');
      const [activeSize, setActiveSize] = useState('');
      const [activeColor, setActiveColor] = useState('');
      const [activeGender, setActiveGender] = useState('');
      const [isSizeOpen, setIsSizeOpen] = useState(false);
      const [isColorOpen, setIsColorOpen] = useState(false);
      const [isGenderOpen, setIsGenderOpen] = useState(false);

      const categories = ['New Arrivals', 'Best Sellers'];
      const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large'];
      const colors = ['Solid Color', 'Full Black', 'Colorful', 'Graffiti'];
      const genders = ['Female', 'Male'];

      return (
            <div className="">
                  {/* Search Input */}
                  <div className="mb-4">
                        <div className="relative">
                              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <input
                                    type="text"
                                    placeholder="Search by name"
                                    className="w-full h-14 bg-gray-100 rounded-3xl pl-12 pr-4 text-lg focus:outline-none"
                              />
                        </div>
                  </div>

                  {/* Categories */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                        {categories.map((category, index) => (
                              <button
                                    key={index}
                                    onClick={() => setActiveCategory(category)}
                                    className={`flex justify-between items-center py-2 px-4 rounded-lg ${
                                          activeCategory === category ? 'bg-[#31A2FF] text-white' : 'border border-gray-400 text-gray-700'
                                    }`}
                              >
                                    {category}
                                    {activeCategory === category ? <RxCross2 size={20} /> : <RxPlus size={20} />}
                              </button>
                        ))}
                  </div>

                  {/* Size Filter */}
                  <FilterSection
                        title="SIZE"
                        options={sizes}
                        activeOption={activeSize}
                        setActiveOption={setActiveSize}
                        isOpen={isSizeOpen}
                        toggleOpen={() => setIsSizeOpen(!isSizeOpen)}
                  />

                  {/* Color Filter */}
                  <FilterSection
                        title="COLOR"
                        options={colors}
                        activeOption={activeColor}
                        setActiveOption={setActiveColor}
                        isOpen={isColorOpen}
                        toggleOpen={() => setIsColorOpen(!isColorOpen)}
                  />

                  {/* Gender Filter */}
                  <FilterSection
                        title="GENDER"
                        options={genders}
                        activeOption={activeGender}
                        setActiveOption={setActiveGender}
                        isOpen={isGenderOpen}
                        toggleOpen={() => setIsGenderOpen(!isGenderOpen)}
                  />
            </div>
      );
};

export default FilterPanel;
