'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Post } from '../lib/data';

interface PostLinkProps {
  post: Post;
}

export default function PostLink({ post }: PostLinkProps) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="group flex items-center p-4 border rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
    >
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
        <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg group-hover:text-blue-600">{post.title}</h3>
        <p className="text-sm text-gray-500">${post.price}</p>
      </div>
    </Link>
  );
}