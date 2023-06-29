import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './UI/Card';
import { ADD_BOOK } from '../redux/books/books';

const NewBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    isTitleValid: true,
    author: '',
    isAuthorValid: true,
    category: 'Action',
    isFormValid: false,
  });

  const {
    title, isTitleValid, author, isAuthorValid, category, isFormValid,
  } = bookData;
  const categoryRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const isTitleValid = title.trim().length >= 3 && title.trim().length <= 55;
    const isAuthorValid = author.trim().length >= 3 && author.trim().length <= 25;
    const isFormValid = isTitleValid && isAuthorValid
    && title.trim().length !== 0 && author.trim().length !== 0;

    setBookData((prevState) => ({
      ...prevState,
      isTitleValid,
      isAuthorValid,
      isFormValid,
    }));
  }, [title, author]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addBookHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      dispatch(
        ADD_BOOK({
          title: title.trim(),
          author: author.trim(),
          category: categoryRef.current.value.trim(),
        }),
      );

      setBookData({
        title: '',
        isTitleValid: true,
        author: '',
        isAuthorValid: true,
        category: 'Action',
        isFormValid: false,
      });
    }
  };

  return (
    <Card>
      <h3>Add New Book</h3>
      <form onSubmit={addBookHandler}>
        <div className={!isTitleValid ? 'invalid' : ''}>
          <p>{!isTitleValid && 'Title should be 3 to 50 characters'}</p>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={!isAuthorValid ? 'invalid' : ''}>
          <p>{!isAuthorValid && 'Name should be 3 to 20 characters'}</p>
          <input
            name="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <select ref={categoryRef} name="category" value={category} onChange={inputChangeHandler}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </Card>
  );
};

export default NewBook;
