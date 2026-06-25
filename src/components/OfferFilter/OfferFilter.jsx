function OfferFilter({
  filter,
  setFilter
}) {
  return (
    <select
      value={filter}
      onChange={(e) =>
        setFilter(e.target.value)
      }
      style={{
        padding: "10px",
        marginBottom: "20px"
      }}
    >
      <option value="all">
        All Offers
      </option>

      <option value="locked">
        Locked
      </option>

      <option value="unlocked">
        Unlocked
      </option>
    </select>
  );
}

export default OfferFilter;