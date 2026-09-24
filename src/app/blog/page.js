import Footer from '../../components/Footer';
import Banana from '../../components/Banana';
import DarkModeButton from '../../components/darkModeButton';
import Link from 'next/link';
import { SquareDot } from "lucide-react";
import { getPosts } from '../../lib/posts.js';

export const dynamic = 'force-static';

export default function BlogPage() {
    const posts = getPosts();
    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 dark:text-white text-gray-900 font-roboto'>
            <Banana />
            <main className="flex-1 px-6 py-10 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center text-4xl md:text-5xl font-bold text-amber-900 dark:text-slate-100 mb-12">
                        Blogs
                    </h1>

                    <div className="space-y-8">
                        {posts.map((post) => {
                            return (
                                <div
                                    key={post.slug}
                                    className="border-b border-amber-200 dark:border-slate-700 pb-6"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <SquareDot className="text-amber-700 dark:text-amber-400" />

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-2xl font-semibold hover:underline text-amber-900 dark:text-slate-100"
                                        >
                                            {post.title}
                                        </Link>
                                    </div>

                                    <p className="mt-3 ml-10 text-gray-600 dark:text-slate-400">
                                        {post.description}{' '}

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-amber-700 dark:text-amber-400 hover:underline"
                                        >
                                            Keep reading...
                                        </Link>
                                    </p>
                                    <div className="mt-2 ml-10 flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-amber-200 dark:bg-slate-700 text-gray-800 dark:text-slate-300 px-2 py-1 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <div className='absolute top-4 right-4 z-10'>
                <DarkModeButton />
            </div>
            <Footer />
        </div>
    );
}