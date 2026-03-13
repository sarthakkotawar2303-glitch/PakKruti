import { Link } from "react-router-dom";

const RecipeList = ({ item }) => {
  const { id, image_url, title, publisher } = item || {};

  return (
    <div className="group flex flex-col w-full overflow-hidden p-4 bg-amber-100/40 backdrop-blur-sm shadow-lg shadow-amber-900/5 gap-3 border border-amber-200/60 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10">

      {/* Image Container with Zoom Effect */}
      <div className="h-48 flex justify-center overflow-hidden rounded-2xl relative">
        <img
          src={image_url}
          alt={title}
          className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle Overlay to make text above it readable if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col gap-2 px-2 pb-2">
        {/* Publisher - Using a warm terracotta instead of cyan */}
        <span className="text-xs uppercase tracking-[0.2em] text-orange-700 font-bold">
          {publisher}
        </span>

        {/* Title - Using deep wood-brown instead of black */}
        <h3 className="font-extrabold text-xl text-amber-950 line-clamp-1 leading-tight tracking-tight">
          {title}
        </h3>

        {/* Action Button - Earthy and Accessible */}
        <Link
          to={`/recipe-item/${id}`}
          className="mt-3 block w-full text-center text-xs py-3 px-4 rounded-xl uppercase font-bold tracking-widest shadow-md bg-amber-900 text-amber-50 transition-all hover:bg-orange-700 active:scale-95 shadow-amber-900/20"
        >
          View Recipe
        </Link>
      </div>

    </div>
  );
};

export default RecipeList;