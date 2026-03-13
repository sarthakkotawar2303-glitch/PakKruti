import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../RecipeContext/RecipeContext";

const Favorites = () => {
  const { favList, handleFav } = useContext(GlobalContext);

  if (favList.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50/50">
        <div className="relative h-[40vh] w-full overflow-hidden bg-amber-900">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/60 to-amber-800/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-8 md:px-16 pb-10 w-full">
              <Link
                to="/home"
                className="text-amber-100/80 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors"
              >
                ← Back to Recipes
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-amber-50 mt-4 leading-tight drop-shadow-sm">
                Your Favorites
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-amber-100/80 border-b border-amber-200 sticky top-0 z-10 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <p className="text-[10px] font-black uppercase text-orange-600 tracking-widest">
              0 saved recipes
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="text-7xl mb-6 opacity-30">🤍</div>
          <h2 className="text-3xl font-black text-amber-950">Nothing saved yet</h2>
          <p className="text-amber-800/70 max-w-sm mx-auto mt-3 font-medium">
            Browse recipes and tap "Add to Favorites" to build your personal collection.
          </p>
          <Link
            to="/home"
            className="mt-8 inline-block px-10 py-4 bg-amber-900 text-amber-50 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-700 active:scale-95 transition-all shadow-lg shadow-amber-900/20"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/50 pb-20">

      <div className="relative h-[45vh] w-full overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-0 opacity-40">
          {[...favList, ...favList, ...favList].slice(0, 6).map((item, i) => (
            <img
              key={i}
              src={item.image_url}
              alt=""
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/fef3c7/92400e?text=+"; }}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/50 to-amber-800/30" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/home"
              className="text-amber-100/80 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors"
            >
              ← Back to Recipes
            </Link>
            <h1 className="text-4xl md:text-7xl font-black text-amber-50 mt-4 leading-tight drop-shadow-sm">
              Your Favorites
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-amber-100/80 border-b border-amber-200 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest">Saved</span>
              <span className="text-amber-900 font-bold">{favList.length} {favList.length === 1 ? "Recipe" : "Recipes"}</span>
            </div>
          </div>
          <p className="text-amber-700/50 text-[10px] font-black uppercase tracking-widest">
            Your personal collection
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8">

          {favList.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row gap-0 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-amber-200 overflow-hidden shadow-inner hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.title || "Recipe image"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x300/fef3c7/92400e?text=No+Image";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6 md:p-8">
                <div>
                  <span className="inline-block py-1 px-3 bg-amber-200/50 text-amber-800 text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-3">
                    {item.publisher || "Unknown Publisher"}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-amber-950 leading-tight tracking-tight">
                    {item.title || "Untitled Recipe"}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <Link
                    to={`/recipe-item/${item.id}`}
                    className="flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-black bg-amber-900 text-amber-50 hover:bg-orange-700 active:scale-95 transition-all shadow-lg shadow-amber-900/20"
                  >
                    View Recipe →
                  </Link>
                  <button
                    onClick={() => handleFav(item)}
                    className="flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-black bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 active:scale-95 transition-all"
                  >
                    <span>♥</span> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Favorites;