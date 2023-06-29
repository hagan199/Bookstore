import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './redux/ui/uiSlice';
import Modal from './components/UI/Modal';
import LoadingIndicator from './components/UI/LoadingIndicator';

import Layout from './components/UI/Layout';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

const App = () => {
  // Get relevant state values from the Redux store
  const {
    showModal, loading, isError, message,
  } = useSelector((state) => state.ui);
  
  // Dispatch actions using the useDispatch hook
  const dispatch = useDispatch();

  // Handler function to close the modal
  const closeModalHandler = () => {
    if (!loading && showModal) {
      dispatch(uiActions.closeModal());
    }
  };

  return (
    <Layout>
      {showModal && (
        <Modal onClick={closeModalHandler}>
          {/* Display loading indicator if loading is true */}
          {loading && <LoadingIndicator />}
          
          {/* Display success or error message */}
          {message !== '' && (
            <div className="model-message">
              <h3>{isError ? 'Error' : 'Success'}</h3>
              <p className={isError ? 'action-error' : 'action-success'}>
                {message}
              </p>
              <button
                className="btn-close"
                onClick={closeModalHandler}
                type="button"
              >
                OK
              </button>
            </div>
          )}
        </Modal>
      )}
      
      <Routes>
        {/* Route for the BooksPage component */}
        <Route path="/" element={<BooksPage />} />
        
        {/* Route for the CategoriesPage component */}
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
