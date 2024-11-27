'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCategory } from '@/redux/features/filter/filterSlice';
import { useGetCategoriesQuery } from '@/redux/features/selectOption/selectOptionApi';

const CategoryBar = () => {
      const { data: categoryData, isLoading, isError } = useGetCategoriesQuery([]);
      const activeCategory = useAppSelector((state) => state.filter.category);
      const dispatch = useAppDispatch();

      const categories = [
            { label: 'All', value: '' },
            ...(categoryData
                  ? categoryData.map((category: { _id: string; name: string }) => ({
                          label: category.name.replace(/-/g, ' '), // Replace hyphens with spaces
                          value: category.name,
                    }))
                  : []),
      ];
      const handleCategoryChange = (categoryValue: string) => {
            dispatch(setCategory(categoryValue));
      };

      if (isLoading) {
            return <p className="text-center text-gray-500">Loading categories...</p>;
      }

      if (isError) {
            return <p className="text-center text-red-500">Failed to load categories</p>;
      }

      return (
            <div className="flex flex-wrap gap-4 md:gap-0 justify-center md:justify-start space-x-4 overflow-x-auto my-5">
                  {categories.map((category: { label: string; value: string }) => (
                        <button
                              key={category.value}
                              onClick={() => handleCategoryChange(category.value)}
                              className={`px-4 py-2 rounded-[8px] ${
                                    activeCategory === category.value
                                          ? 'bg-[#31A2FF] text-white border border-transparent'
                                          : 'bg-transparent border border-[#606060] text-text-primary'
                              }`}
                        >
                              {category.label}
                        </button>
                  ))}
            </div>
      );
};

export default CategoryBar;
