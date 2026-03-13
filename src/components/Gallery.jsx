import { useMemo } from "react";
import PhotoCard from "./PhotoCard";

const Gallery = ({ photos, searchTerm, favorites, dispatch }) => {

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const toggleFavorite = (photo) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: photo
    });
  };

  if (filteredPhotos.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No photos found.
      </p>
    );
  }


  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {filteredPhotos.map((photo) => (

        <PhotoCard
          key={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav) => fav.id === photo.id)}
        />

      ))}

    </div>
  );
};

export default Gallery;