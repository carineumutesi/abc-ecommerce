'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../../lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const router = useRouter();
  const post = posts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center mb-8 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        {/* Post Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h1>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${post.price}
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              {post.description}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products or Navigation */}
        <div className="mt-12 text-center">
          <Link
            href="/posts"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </main>
  );
}