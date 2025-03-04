import { useState } from "react";
import ListFilter from "./ListFilter";

const ListFilterParent = () => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grape"];

  return (
    <div>
      <label htmlFor="search-input">Search: </label>
      <input
        type="text"
        id="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <ListFilter items={items} query={query} />
    </div>
  );
};

export default ListFilterParent;
