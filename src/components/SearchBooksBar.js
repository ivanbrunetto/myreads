import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBooksBar = ({ onSearchBooks }) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    onSearchBooks(e.target.value);
  };

  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="search-books-input-wrapper"
      >
        <input
          type="text"
          name="str"
          id="str"
          placeholder="Search by title, author, or ISBN"
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

SearchBooksBar.propTypes = {
  onSearchBooks: PropTypes.func.isRequired,
};

export default SearchBooksBar;
