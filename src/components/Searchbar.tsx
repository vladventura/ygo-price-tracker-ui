import { ChangeEvent, useState } from "react";
import "./Searchbar.css";

const Searchbar = ({ onSearchChange }: SearchbarProps) => {
  const [search, setSearch] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        onChange={onChange}
        value={search}
        className="searchbar-input"
      />
    </div>
  );
};

interface SearchbarProps {
  onSearchChange: Function;
}

export default Searchbar;
