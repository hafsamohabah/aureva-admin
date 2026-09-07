import "../styles/SearchBar.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="product-search">Search products</label>

      <input
        id="product-search"
        type="search"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;