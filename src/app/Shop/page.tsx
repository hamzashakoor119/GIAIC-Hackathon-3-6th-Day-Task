'use client';
import React, { useState, ChangeEvent } from 'react';
import WebsiteBanner from '../components/WebsiteBanner';
import Gurantees from '../components/Gurantees';
import Pagination from '../components/Pagination';
import ProductItem from '../components/ProductItem';
import { UseCartContext } from '../Context/CartContext';

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page
  const [itemsPerPage] = useState<number>(16); // Items to show per page
  const [optionValue, setOptionValue] = useState<string>(''); // Sorting option
  const { data = [] } = UseCartContext(); // Fetch product data from context

  // Remove duplicates from the data
  const uniqueProducts = data.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id) // Ensure unique products by `id`
  );

  const handleOptionChanges = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewAll = () => {
    setCurrentPage(1); // Reset to the first page
    setOptionValue(''); // Clear sorting
  };

  const refinedArray =
    optionValue === 'From Expensive to Cheap'
      ? [...uniqueProducts].sort((a, b) => b.price - a.price)
      : [...uniqueProducts].sort((a, b) => a.price - b.price);

  const paginatedArray = refinedArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(refinedArray.length / itemsPerPage);

  return (
    <div className="min-h-screen w-screen">
      <WebsiteBanner title={'Shop'} />
      {/* Filter Section */}
      <div className="hidden md:block">
        <div className="cp w-full bg-[#FAF4F4] flex-wrap flex-between py-5">
          <section className="flex items-center gap-6 md:gap-8 md:w-[50%]">
            <img src="/images/Filter1.png" alt="Filter Icon" />
            <span className="font-medium text-lg tracking-wider">Filter</span>
            <img src="/images/Filter2.png" alt="Filter Icon" />
            <img src="/images/Filter3.png" alt="Filter Icon" />
            <span className="text-3xl">|</span>
            <span className="text-[.8em] md:text-[1.1em] font-medium tracking-wider">
              Showing {paginatedArray.length} of {refinedArray.length} Results
            </span>
          </section>
          <section className="flex items-center gap-4 md:w-[40%]">
            <span className="text-lg font-medium tracking-wide">Sort By</span>
            <select
              className="outline-none text-[1em] placeholder:text-xl w-max rounded-lg border-none bg-white p-3 placeholder:text-[#4F4F4F]"
              value={optionValue}
              onChange={handleOptionChanges}
            >
              <option value="From Expensive to Cheap">From Expensive to Cheap</option>
              <option value="From Cheap to Expensive">From Cheap to Expensive</option>
            </select>
          </section>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-3">
        {paginatedArray.map((item, index) => (
          <ProductItem
            key={index}
            index={index}
            item={{
              ...item,
              id: item.id.toString(), // Ensure ID is a string
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onViewAll={handleViewAll}
      />

      {/* Guarantees Section */}
      <Gurantees />
    </div>
  );
};

export default Page;
