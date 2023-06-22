import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => {
  const handleRemove = (id) => {
    // Handle the removal of the book with the given id
    // You can pass this function as a prop to the Book component
  };

  return (
    <ul>
      {books.map(({ id, title, author, category }) => (
        <li key={id}>
          <Book
            id={id}
            title={title}
            author={author}
            category={category}
            onRemove={() => handleRemove(id)}
          />
        </li>
      ))}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

export default BooksList;
