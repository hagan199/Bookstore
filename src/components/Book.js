import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from './UI/Card';
import { removeBook } from '../redux/books/books';
import PercentageCircle from './UI/PercentageCircle';
import styles from './Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };
  const min = 10;
  const max = 100;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const minCh = 1;
  const maxCh = 20;
  const randomChapter = Math.floor(Math.random() * (maxCh - minCh + 1)) + minCh;
  return (
    <li>
      <Card extraclass={styles.book} id={id}>
        <div className={styles.bookContent}>
          <h4>{category}</h4>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className={styles.bookActions}>
            <button type="button">Comments</button>
            <button type="button" onClick={removeBookHandler}>
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className={styles.bookProgress}>
          <PercentageCircle percentage={randomNum} />
          <div className={styles.bookPercentage}>
            <h2>
              {randomNum}
              <span>%</span>
            </h2>
            <p>Completed</p>
          </div>
        </div>
        <div className={styles.updateProgress}>
          <p>CURRENT CHAPTER</p>
          <h4>
            Chapter
            {randomChapter}
          </h4>
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
