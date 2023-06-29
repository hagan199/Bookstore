import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CATEGORY_STATUS } from '../redux/categories/categories';
import Card from '../components/UI/Card';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(UPDATE_CATEGORY_STATUS());
  };

  const statusContent = status && status !== '' ? <p>{status}</p> : null;

  return (
    <Card>
      <h2>Welcome to the Categories Page</h2>
      {statusContent}
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
    </Card>
  );
};

export default CategoriesPage;
