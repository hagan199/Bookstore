import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CATEGORY_STATUS } from '../redux/categories/categories';
import Card from '../components/UI/Card';
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(UPDATE_CATEGORY_STATUS());
  };
  let statusContent;
  if (status && status !== '') {
    statusContent = <p>{status}</p>;
  }

  return (
    <Card extraclass={styles.Container}>
      <h1>Welcome to the Categories Page</h1>
      {statusContent}
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
    </Card>
  );
};

export default CategoriesPage;
