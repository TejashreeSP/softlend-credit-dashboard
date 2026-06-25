function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (
    <input
      type="text"
      placeholder="Search lender..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px"
      }}
    />
  );
}

export default SearchBar;