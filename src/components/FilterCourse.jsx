const FilterCourse = ({ setFilterCourse, darkMode }) => {
  return (
    <div className="flex-1 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Filter by course..."
        onChange={(e) => setFilterCourse(e.target.value)}
        className={`pl-10 pr-4 py-2 w-full rounded-md ${
          darkMode 
            ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500' 
            : 'bg-gray-50 border-gray-300 focus:border-blue-500'
        } border focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors`}
      />
    </div>
  );
};

export default FilterCourse;