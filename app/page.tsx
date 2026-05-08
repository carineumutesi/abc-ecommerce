import PostCard from './components/PostCard';
import PostFilter from './components/PostFilter';
import { posts, Post } from './lib/data';
import { Suspense } from 'react';

function filterPosts(posts: Post[], searchParams: URLSearchParams): Post[] {
  let filtered = [...posts];

  const category = searchParams.get('category');
  const search = searchParams.get('search')?.toLowerCase();

  if (category) {
    filtered = filtered.filter(post => post.category === category);
  }

  if (search) {
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search)
    );
  }

  return filtered;
}

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const urlParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlParams.set(key, Array.isArray(value) ? value[0] : value);
    }
  });
  const filteredPosts = filterPosts(posts, urlParams);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            ABC E-Commerce
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products with real-time navigation and filtering
          </p>
        </div>

        {/* Filter */}
        <Suspense fallback={<div className="bg-white rounded-xl shadow-lg p-6 mb-8">Loading filters...</div>}>
          <PostFilter />
        </Suspense>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </main>
  );
}