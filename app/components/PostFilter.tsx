'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '../lib/data';

export default function PostFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm.trim()) {
      params.set('search', searchTerm.trim());
    } else {
      params.delete('search');
    }
    router.push(`?${params.toString()}`);
  };

  const currentCategory = searchParams.get('category') || 'all';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}