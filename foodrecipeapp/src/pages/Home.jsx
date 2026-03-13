import { useContext } from "react";
import { GlobalContext } from "../RecipeContext/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const { recipeList, loading, error } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 bg-amber-50">
        <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
        <p className="text-amber-900 font-bold tracking-widest uppercase text-sm animate-pulse">
          Simmering your recipes...
        </p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      <div className="py-12 px-6 container mx-auto">

        <header className="mb-12 text-center md:text-left">
          <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-3">
            Flavor is a journey
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-amber-950 tracking-tighter leading-tight">
            Crafting <span className="italic text-amber-800">Memories</span>, <br />
            One Recipe at a Time.
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            <div className="h-px flex-1 bg-amber-200"></div>
          </div>
        </header>

        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-black text-red-700">Something went wrong</h2>
            <p className="text-red-500/80 max-w-sm mx-auto mt-2 font-medium">{error}</p>
          </div>
        )}

        {!error && recipeList === null && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-7xl mb-6">🍳</div>
            <h2 className="text-3xl font-black text-amber-950">What are you craving?</h2>
            <p className="text-amber-800/70 max-w-sm mx-auto mt-3 font-medium">
              Search for a recipe above to get started. Try "Pizza", "Pasta", or "Salad".
            </p>
          </div>
        )}

        {!error && recipeList !== null && recipeList.length > 0 && (
          <section>
            <div className="mb-8 flex justify-end">
              <p className="text-amber-700/60 text-[10px] font-black uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-md border border-amber-200">
                Found {recipeList.length} Culinary Gems
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-6">
              {recipeList.map((item) => (
                <RecipeCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {!error && recipeList !== null && recipeList.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-7xl mb-6 opacity-40">🥄</div>
            <h2 className="text-3xl font-black text-amber-950">Missing an ingredient?</h2>
            <p className="text-amber-800/70 max-w-sm mx-auto mt-3 font-medium">
              We couldn't find any recipes for that search. Try something classic like "Pizza" or "Salad".
            </p>
          </div>
        )}

      </div>
    </main>
  );
};

export default Home;