import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../RecipeContext/RecipeContext";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  const linkStyles = ({ isActive }) =>
    `relative py-1 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
      isActive ? "text-orange-700" : "text-amber-800/70 hover:text-orange-700"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur-md border-b border-amber-200 shadow-md shadow-amber-900/5">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <NavLink to="/home" className="flex items-center gap-2 group">
          <span className="text-3xl drop-shadow-sm">🥘</span>
          <h2 className="text-2xl font-black text-amber-900 tracking-tighter">
            Pak<span className="text-orange-600">Kruti </span>
          </h2>
        </NavLink>

        <form 
          onSubmit={handleSubmit} 
          className="relative flex items-center w-full max-w-lg"
        >
          <div className="absolute left-4 text-orange-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Search for ingredients..."
            className="w-full pl-12 pr-4 py-3 bg-orange-100/50 border-2 border-amber-200 rounded-2xl text-amber-900 placeholder-amber-700/50 focus:outline-none focus:border-orange-400 focus:bg-orange-50 transition-all"
          />
          
          <button
            type="submit"
            className="absolute right-2 px-5 py-1.5 bg-orange-600 text-amber-50 font-bold rounded-xl hover:bg-orange-700 active:scale-95 transition-all shadow-lg shadow-orange-900/20"
          >
            Go
          </button>
        </form>

        <ul className="flex items-center gap-10">
          <li>
            <NavLink to="/home" className={linkStyles}>
              Home
              <span className="block h-0.5 bg-orange-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={linkStyles}>
              Favorites
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;