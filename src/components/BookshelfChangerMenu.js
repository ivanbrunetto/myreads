import PropType from "prop-types";

const BookshelfChangerMenu = ({ onUpdateBook }) => {
  return (
    <div className="book-shelf-changer">
      <select onChange={(e) => onUpdateBook(e.target.value)}>
        <option value="none" disabled>
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
};

export default BookshelfChangerMenu;
