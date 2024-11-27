'use client';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RxCross2, RxPlus } from 'react-icons/rx';
import { CgChevronDown } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setProductType, setSize, setColor, setGender, setSearch } from '@/redux/features/filter/filterSlice';
import { useGetColorsQuery } from '@/redux/features/selectOption/selectOptionApi';

interface FilterSectionProps {
      title: string;
      options: { label: string; value: string }[]; // Make sure options is an array of objects
      activeOption: string | null;
      setActiveOption: (option: string) => void;
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
                                    onClick={() => setActiveOption(option.value)}
                                    className={`px-4 py-2 rounded-[8px] ${
                                          activeOption === option.value
                                                ? 'bg-[#31A2FF] border text-white border-transparent'
                                                : 'bg-transparent border border-[#606060]'
                                    }`}
                              >
                                    {option.label}
                              </button>
                        ))}
                  </div>
            </div>
      </div>
);

const FilterPanel = () => {
      // Redux dispatch and selector
      const dispatch = useAppDispatch();
      const { productType, size, color, gender, search } = useAppSelector((state) => state.filter);
      const { data: colorsData } = useGetColorsQuery([]);
      // Local state for dropdown visibility
      const [isSizeOpen, setIsSizeOpen] = useState(false);
      const [isColorOpen, setIsColorOpen] = useState(false);
      const [isGenderOpen, setIsGenderOpen] = useState(false);

      // Filter options
      const categories = [
            { label: 'New Arrivals', value: 'newProduct' },
            { label: 'Best Sellers', value: 'bestSellingProduct' },
      ];

      const sizes = [
            { label: 'All', value: '' },
            { label: 'X-Small', value: 'XS' },
            { label: 'Small', value: 'S' },
            { label: 'Medium', value: 'M' },
            { label: 'Large', value: 'L' },
            { label: 'X-Large', value: 'XL' },
            { label: 'XX-Large', value: 'XXL' },
      ];

      const colors = [
            { label: 'All', value: '' },
            ...(colorsData
                  ? colorsData?.map((color: { colourName: string }) => ({
                          label: color.colourName.replace(/-/g, ' '), // Replace hyphens with spaces
                          value: color.colourName,
                    }))
                  : []),
      ];

      const genders = [
            { label: 'All', value: '' },
            { label: 'Female', value: 'female' },
            { label: 'Male', value: 'male' },
      ];

      // Handlers for setting active filter values via Redux

      const handleProductTypeChange = (categoryValue: string) => {
            if (productType === categoryValue) {
                  // If the clicked category is already selected, deselect it
                  dispatch(setProductType('')); // or use `null` if needed
            } else {
                  // Otherwise, select the clicked category
                  dispatch(setProductType(categoryValue));
            }
      };

      const handleSizeChange = (newSize: string) => {
            dispatch(setSize(newSize));
      };

      const handleColorChange = (newColor: string) => {
            dispatch(setColor(newColor));
      };

      const handleGenderChange = (newGender: string) => {
            dispatch(setGender(newGender));
      };

      const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setSearch(event.target.value));
      };

      return (
            <div>
                  {/* Search Input */}
                  <div className="mb-4">
                        <div className="relative">
                              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                              <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearchChange}
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
                                    onClick={() => handleProductTypeChange(category.value)}
                                    className={`flex justify-between items-center py-2 px-4 rounded-lg ${
                                          productType === category.value
                                                ? 'bg-[#31A2FF] text-white'
                                                : 'border border-gray-400 text-gray-700'
                                    }`}
                              >
                                    {category.label}
                                    {productType === category.value ? <RxCross2 size={20} /> : <RxPlus size={20} />}
                              </button>
                        ))}
                  </div>

                  {/* Size Filter */}
                  <FilterSection
                        title="SIZE"
                        options={sizes}
                        activeOption={size || ''}
                        setActiveOption={handleSizeChange}
                        isOpen={isSizeOpen}
                        toggleOpen={() => setIsSizeOpen(!isSizeOpen)}
                  />

                  {/* Color Filter */}
                  <FilterSection
                        title="COLOR"
                        options={colors}
                        activeOption={color || ''}
                        setActiveOption={handleColorChange}
                        isOpen={isColorOpen}
                        toggleOpen={() => setIsColorOpen(!isColorOpen)}
                  />

                  {/* Gender Filter */}
                  <FilterSection
                        title="GENDER"
                        options={genders}
                        activeOption={gender || ''}
                        setActiveOption={handleGenderChange}
                        isOpen={isGenderOpen}
                        toggleOpen={() => setIsGenderOpen(!isGenderOpen)}
                  />
            </div>
      );
};

export default FilterPanel;
