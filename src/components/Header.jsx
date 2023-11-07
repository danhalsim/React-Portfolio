import { Link, useLocation } from 'react-router-dom';
import resume from '../../public/resume.pdf'; // add actual resume later

function Header() {

  // page location checker
  // use this to change navbar page titles from gray to blue when user is on that page
  const location = useLocation();
  const isCurrentPage = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link key={1} to="/">
          <a class="flex items-center">
            <img src="https://cdn.discordapp.com/attachments/1170517472307314719/1170579212726452264/IMAG0005_2.jpg?ex=65598dd8&is=654718d8&hm=5fbbdd20aba1d53c830e08f134b2bf1c8608a5aacb438231f10faae42d3649f2&"
              class="h-8 mr-3 rounded-lg" alt="profile picture" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Daniel Simanjuntak</span>
          </a>
        </Link>

        <div class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <Link key={1} to="/">
              <li>
                <a class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                ${isCurrentPage('/') ? 'text-blue-700' : 'text-gray-900'}`}>Home</a>
              </li>
            </Link>

            <Link key={2} to="/about">
              <li>
                <a class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                ${isCurrentPage('/about') ? 'text-blue-700' : 'text-gray-900'}`}>About</a>
              </li>
            </Link>

            <Link key={3} to="/portfolio">
              <li>
                <a class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                ${isCurrentPage('/portfolio') ? 'text-blue-700' : 'text-gray-900'}`}>Portfolio</a>
              </li>
            </Link>

            <Link key={4} to="/contact">
              <li>
                <a class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                ${isCurrentPage('/contact') ? 'text-blue-700' : 'text-gray-900'}`}>Contact</a>
              </li>
            </Link>

            <li>
              <a href={resume} target="_blank" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;