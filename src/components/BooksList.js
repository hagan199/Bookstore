import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category, handleRemove,
}) => (
  <li>
    <div>
      <span>{title}</span>
      <span>{author}</span>
      <span>{category}</span>
    </div>
    <button type="button" onClick={() => handleRemove(id)}>Remove</button>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

const BooksList = ({ books, handleRemove }) => (
  <ul>
    {books.map(({
      id, title, author, category,
    }) => (
      <Book
        key={id}
        id={id}
        title={title}
        author={author}
        category={category}
        handleRemove={handleRemove}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default BooksList;
