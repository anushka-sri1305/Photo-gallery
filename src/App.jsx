import { useState, useReducer, useEffect, useCallback } from "react";
import SearchBar from "./components/searchBar.jsx";
import Gallery from "./components/Gallery";
import useFetchPhotos from "./hooks/useFetchPhotos";
import { favoritesReducer } from "./reducers/favoritesReducer";

function App() {

  const { photos, loading, error } = useFetchPhotos();

  const [searchTerm, setSearchTerm] = useState("");

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  return (
   <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">

      <div className="container mx-auto p-6">

        <h1 className="text-4xl font-bold text-center mb-8">
          Photo Gallery
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
        />

        {loading && <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <Gallery
            photos={photos}
            searchTerm={searchTerm}
            favorites={favorites}
            dispatch={dispatch}
          />
        )}

      </div>

    </div>
  );
}

export default App;