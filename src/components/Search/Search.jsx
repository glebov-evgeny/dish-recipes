import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
      cb(value)
  };

  return (
      <div className="search">
        <div className="search__container">
          <input
          type="search"
          id="search-field"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value} 
          className="search__input"
           />

            <button className="search__btn"onClick={handleSubmit}>
              <div className="search__btn-circle"></div>
              <span className="search__btn-line"></span>
            </button>

        </div>
    </div>
  );
}
export { Search };
