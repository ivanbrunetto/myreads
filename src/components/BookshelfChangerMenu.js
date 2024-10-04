import PropType from "prop-types";

const BookshelfChangerMenu = ({ onUpdateBook, selectedShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => onUpdateBook(e.target.value)}
        value={selectedShelf ? selectedShelf : "none"}
      >
        <option value="disabled" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookshelfChangerMenu.propType = {
  onUpdateBook: PropType.func.isRequired,
  selectedShelf: PropType.string.isRequired,
};

export default BookshelfChangerMenu;
