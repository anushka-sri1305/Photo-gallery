const PhotoCard = ({ photo, toggleFavorite, isFavorite }) => {
    return (
        <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">

            <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="p-4 flex justify-between items-center">

                <p className="text-sm font-semibold text-gray-700">
                    {photo.author}
                </p>

                <button
                    onClick={() => toggleFavorite(photo)}
                    className="text-xl transition transform hover:scale-110"
                >
                    {isFavorite ? "❤️" : "🤍"}
                </button>

            </div>

        </div>
    );
};

export default PhotoCard;