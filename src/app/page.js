import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaReddit, FaInstagram } from 'react-icons/fa';
import DarkModeButton from './components/darkModeButton';

export default function Page() {
  const baseClass =
    "inline-block text-3xl mr-4 mt-4 transition-all duration-200 transform hover:cursor-pointer";
  
  return (
    <div className="flex items-center h-screen bg-gradient-to-r from-black to-emerald-500 dark:from-white dark:to-emerald-600 dark:text-black text-white font-roboto">
      {/* Left half content */}
      <div className="w-13/4 md:w-1/2 pl-8 md:pl-16 pb-16">
        <div className="text-5xl md:text-6xl font-semibold">
          Hi, my name is <span className="text-blue-400 dark:text-blue-700">Arya</span>
        </div>
        <div className="text-2xl mt-4 dark:text-gray-800">
          I like <a className="text-green-300 dark:text-green-700 hover:underline" href='https://namemc.com/profile/Sparky493.1'>Minecraft</a>, <a className="text-yellow-700 dark:text-yellow-600 hover:underline" href='https://www.chess.com/member/player493p'>Chess</a>, <a className='hover:underline' href='https://x.com/SpaceStuffArya'>Rockets</a> and <a className="text-blue-300 dark:text-blue-600 hover:underline" href='https://github.com/Arya4930'>Coding</a>.
          <br />
          I also build things for the Web.
        </div>
        <div className='mt-4'>
          <a href='https://discord.com/users/897794324748730368' target="_blank" rel="noopener noreferrer"><FaDiscord className={`${baseClass} hover:text-indigo-400 dark:hover:text-indigo-600`} /></a>
          <a href='https://github.com/Arya4930' target="_blank" rel="noopener noreferrer"><FaGithub className={`${baseClass} hover:text-gray-300 dark:hover:text-gray-600`} /></a>
          <a href='https://www.linkedin.com/in/arya-panwar-923375267/' target="_blank" rel="noopener noreferrer"><FaLinkedin className={`${baseClass} hover:text-blue-600 dark:hover:text-blue-700`} /></a>
          <a href='https://x.com/SpaceStuffArya' target="_blank" rel="noopener noreferrer"><FaTwitter className={`${baseClass} hover:text-blue-400 dark:hover:text-blue-500`} /></a>
          <a href='https://www.reddit.com/user/SusUser22/' target="_blank" rel="noopener noreferrer"><FaReddit className={`${baseClass} hover:text-orange-500 dark:hover:text-orange-600`} /></a>
          <a href='https://www.instagram.com/arya_panwar22/' target="_blank" rel="noopener noreferrer"><FaInstagram className={`${baseClass} hover:text-pink-400 dark:hover:text-pink-500`} /></a>
        </div>
      </div>
      <div className='absolute top-4 right-4 z-10'>
        <DarkModeButton />
      </div>
    </div>
  );
}