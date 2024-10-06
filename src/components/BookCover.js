import PropTypes from "prop-types";

const BookCover = ({ imageLinks }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: imageLinks && `url(${imageLinks.smallThumbnail})`,
      }}
    ></div>
  );
};

BookCover.propTypes = {
  imageLinks: PropTypes.object.isRequired,
};

export default BookCover;
