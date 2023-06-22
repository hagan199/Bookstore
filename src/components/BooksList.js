/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BooksList = ({ books }) => (
  <ul>
    {books.map(({
      id, title, author, category,
    }) => (
      <Book key={id} id={id} title={title} author={author} category={category} />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default BooksList;
