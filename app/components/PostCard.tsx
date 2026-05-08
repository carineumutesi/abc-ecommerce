'use client';

import Link from 'next/link';
import { Post } from '../lib/data';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <span className="text-2xl font-bold text-green-600">${post.price}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
          <Link
            href={`/posts/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}