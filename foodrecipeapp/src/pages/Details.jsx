import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "../RecipeContext/RecipeContext";

const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleFav, favList } = useContext(GlobalContext);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecipeById() {
      setRecipeDetails(null); // clear stale recipe before fetching new one
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        if (data?.data) setRecipeDetails(data.data);
      } catch (e) {
        if (e.name !== "AbortError") console.error("Error fetching recipe:", e);
      }
    }

    fetchRecipeById();
    return () => controller.abort(); // cleanup on unmount / id change
  }, [id, setRecipeDetails]);

  const recipe = recipeDetails?.recipe;
  const isFav = favList?.some((item) => item.id === recipe?.id);

  if (!recipe) return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-amber-50/50">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={recipe.image_url}
          alt={recipe.title || "Recipe image"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/1200x600/fef3c7/92400e?text=No+Image";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/home" className="text-amber-100/80 uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
              ← Back to Collection
            </Link>
            <h1 className="text-4xl md:text-7xl font-black text-amber-50 mt-4 leading-tight drop-shadow-sm">
              {recipe.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Sticky Meta Bar */}
      <div className="bg-amber-100/80 border-b border-amber-200 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest">Time</span>
              <span className="text-amber-900 font-bold">{recipe.cooking_time || 45} mins</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest">Yield</span>
              <span className="text-amber-900 font-bold">{recipe.servings || 4} servings</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest">Source</span>
              <span className="text-amber-900 font-bold truncate max-w-[100px]">{recipe.publisher || "Unknown"}</span>
            </div>
          </div>

          {/* ✅ Fixed: shows heart icon + correct label based on fav state */}
          <button
            onClick={() => handleFav(recipe)}
            className={`px-8 py-3 rounded-full font-black text-sm transition-all active:scale-95 flex items-center gap-2 ${
              isFav
                ? "bg-orange-600 text-white shadow-lg shadow-orange-900/20 hover:bg-rose-600"
                : "border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white"
            }`}
          >
            <span>{isFav ? "♥" : "♡"}</span>
            {isFav ? "Remove from Favorites" : "Save to Favorites"}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-16">

          <section>
            <h2 className="text-3xl font-black text-amber-950 mb-8 flex items-center gap-4">
              The Ingredients
              <span className="h-px bg-amber-200 flex-1" />
            </h2>
            <div className="space-y-4">
              {recipe.ingredients.map((ing, i) => (
                <div
                  key={`${ing.description}-${i}`}
                  className="flex items-baseline gap-4 py-3 border-b border-amber-200/50 group"
                >
                  <span className="font-black text-orange-600 text-lg group-hover:scale-125 transition-transform">
                    +
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {/* ✅ Fixed: != null handles quantity of 0 correctly */}
                    {ing.quantity != null && (
                      <span className="font-bold text-amber-950 underline decoration-orange-300 decoration-2 underline-offset-4">
                        {ing.quantity} {ing.unit}
                      </span>
                    )}
                    <span className="text-amber-800/80 font-medium leading-relaxed uppercase tracking-tight text-sm">
                      {ing.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-600 p-12 rounded-[3rem] text-center shadow-2xl shadow-orange-900/20">
            <h3 className="text-3xl font-black text-white mb-4 italic">Ready to cook?</h3>
            <p className="text-orange-100 mb-8 font-medium">
              This recipe was curated by <span className="font-black underline">{recipe.publisher}</span>.
              Click below to view the full culinary instructions on their website.
            </p>
            <a
              href={recipe.source_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-amber-50 text-orange-600 px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              Start Cooking Now
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Details;