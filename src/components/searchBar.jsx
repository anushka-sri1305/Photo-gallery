const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <div className="max-w-xl mx-auto mb-8">
            <input
                type="text"
                placeholder="Search by author..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBar;