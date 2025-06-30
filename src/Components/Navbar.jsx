import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ Profile1, mode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLight = Profile1 === 'white';

    const baseTextColor = isLight ? 'text-black' : 'text-white';
    const hoverTextColor = isLight ? 'hover:text-blue-600' : 'hover:text-orange-400';
    const hoverUnderlineColor = isLight ? 'bg-blue-600' : 'bg-orange-400';
    const backgroundColor = isLight ? 'bg-white' : 'bg-slate-900';

    return (
        <>
            <div className={`sticky top-0 z-50 w-full shadow-md transition-all duration-300 ${backgroundColor} ${baseTextColor}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className={`text-xl font-bold ${isLight ? 'text-blue-500' : 'text-orange-400'}`}
                    >
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex space-x-6">
                            {['/', '/About', '/Project', '/Vlog'].map((path, i) => {
                                const name = ['Home', 'About', 'Projects', 'Vlog'][i];
                                return (
                                    <Link
                                        key={i}
                                        to={path}
                                        className={`relative font-medium group transition-colors duration-300 ${hoverTextColor}`}
                                    >
                                        {name}
                                        <span
                                            className={`absolute bottom-0 left-0 w-0 h-0.5 ${hoverUnderlineColor} group-hover:w-full transition-all duration-300`}
                                        ></span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Dark mode toggle - desktop */}
                        <div className="form-check form-switch flex items-center ml-4">
                            <input
                                className="form-check-input w-10 h-5 rounded-full bg-gray-300 cursor-pointer"
                                type="checkbox"
                                onClick={mode}
                                checked={!isLight}
                            />
                            <label className="ml-2">
                                {isLight ? (
                                    <i className="fa-solid fa-sun text-yellow-400 text-lg"></i>
                                ) : (
                                    <i className="fa-solid fa-moon text-white text-lg"></i>
                                )}
                            </label>
                        </div>

                        {/* Contact button */}
                        <button className="btn ml-4 bg-blue-500 hover:bg-blue-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition duration-300">
                            <a href="#contact">Contact Us</a>
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden flex items-center space-x-3">
                        {/* Dark mode toggle */}
                        <div className="form-check form-switch flex items-center">
                            <input
                                className="form-check-input w-10 h-5 rounded-full bg-gray-300 cursor-pointer"
                                type="checkbox"
                                onClick={mode}
                                checked={!isLight}
                            />
                            <label className="ml-1">
                                {isLight ? (
                                    <i className="fa-solid fa-sun text-yellow-400 text-lg"></i>
                                ) : (
                                    <i className="fa-solid fa-moon text-white text-lg"></i>
                                )}
                            </label>
                        </div>

                        {/* Mobile menu icon */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? (
                                <i className="fas fa-times text-xl"></i>
                            ) : (
                                <i className="fas fa-bars text-xl"></i>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className={`md:hidden w-full px-6 py-6 flex flex-col items-center text-center space-y-5 ${backgroundColor} ${baseTextColor} transition-all`}>
                        <nav className="flex flex-col space-y-5 text-center w-full font-medium">
                            {['/', '/About', '/Project', '/Vlog'].map((path, i) => {
                                const name = ['Home', 'About', 'Projects', 'Vlog'][i];
                                return (
                                    <Link
                                        key={i}
                                        to={path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`py-2 transition-colors duration-300 ${hoverTextColor}`}
                                    >
                                        {name}
                                    </Link>
                                );
                            })}
                        </nav>

                      <div className="w-full flex justify-center bo">
 <button
  onClick={() => setIsMenuOpen(false)}
  className="border text-center btn mt-4 w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition duration-300"
>
  <a href="#contact">Contact Us</a>
</button>
</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
