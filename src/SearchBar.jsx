function SearchBar() {
    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:flex-row sm:items-center">
            {/* Location */}
            <div className="flex items-center gap-2 px-4 py-3 sm:w-[25%] sm:px-6">
                <span className="text-lg sm:text-xl">📍</span>
                <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full text-sm text-gray-700 outline-none sm:text-base"
                />
            </div>
            <div className="hidden h-10 w-[1px] bg-gray-300 sm:block"></div>
            <div className="block h-[1px] w-full bg-gray-200 sm:hidden"></div>

            <div className="flex items-center gap-2 px-4 py-3 sm:w-[55%] sm:px-6">
                <span className="text-lg sm:text-xl">🔍</span>
                <input
                    type="text"
                    placeholder="Search for places, cuisines and more"
                    className="w-full text-sm text-gray-700 outline-none sm:text-base"/>
            </div>

            <button className="bg-[#ff3d87] px-6 py-3 text-sm font-semibold text-white sm:text-base">
                Search
            </button>
        </div>
    );
}

export default SearchBar;
