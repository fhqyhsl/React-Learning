import { useMemo } from "react";

const ListFilter = ({ items = [], query = "" }) => {
  const filteredItems = useMemo(() => {
    if (!query) return items; // 如果查询条件为空，直接返回原始列表
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ListFilter;
