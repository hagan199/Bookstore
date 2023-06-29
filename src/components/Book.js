import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from './UI/Card';
import { REMOVE_BOOK } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(REMOVE_BOOK(id));
  };

  return (
    <li>
      <Card id={id}>
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <button type="button" onClick={removeBookHandler}>
            Remove
          </button>
        </div>
        <div>Progress 64%</div>
        <div>
          <button type="button">Update Progress</button>
        </div>
      </Card>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
