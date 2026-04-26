import Footer from '../components/Footer';
import Banana from '../components/Banana';
import DarkModeButton from '../components/darkModeButton';

export default function BlogPage() {
    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-slate-800 dark:text-white text-gray-900 font-roboto'>
            <Banana />
            <main className="flex-1 flex items-center justify-center px-6 py-24 relative z-10">
                <p className="text-center text-2xl md:text-4xl font-semibold text-amber-900 dark:text-slate-100">
                    It is an empty page, why are you here?
                </p>
            </main>
            <div className='absolute top-4 right-4 z-10'>
                <DarkModeButton />
            </div>
            <Footer />
        </div>
    );
}