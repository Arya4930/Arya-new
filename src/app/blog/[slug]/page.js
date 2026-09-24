import Footer from '../../../components/Footer';
import Banana from '../../../components/Banana';
import DarkModeButton from '../../../components/darkModeButton';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getPosts, getPost } from '../../../lib/posts.js';

export const dynamic = 'force-static';

const mdxComponents = {
    img: (props) => (
        <img
            {...props}
            className="
                rounded-2xl
                shadow-2xl
                my-12
                w-full
                border
                border-slate-700
            "
        />
    )
};

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPage({ params }) {
    const { slug } = await params;
    const post = getPost(slug);

    const { content } = await compileMDX({
        source: post.content,
        components: mdxComponents,
    });

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 dark:text-white text-gray-900 font-roboto'>
            <Banana />
            <main className="flex-1 px-6 py-10 relative z-10">
                <h1 className="text-left text-4xl md:text-5xl font-bold text-amber-900 dark:text-slate-100 mb-12">
                    {post.title}
                </h1>
                {content}
            </main>
            <div className='absolute top-4 right-4 z-10'>
                <DarkModeButton />
            </div>
            <Footer />
        </div>
    );
}